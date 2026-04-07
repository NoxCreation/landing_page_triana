import { createPaymentWithHistory, getMessageRefund } from '@/lib/payment';
import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripeSecretKey = process.env.STRIPE_SECRET_KEY!;
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

const stripe = new Stripe(stripeSecretKey, { apiVersion: process.env.NEXT_PUBLIC_API_VERSION || "2026-03-25.dahlia" });

export async function POST(req: NextRequest) {
    const body = await req.text();
    const sig = req.headers.get('stripe-signature')!;

    let event: Stripe.Event;

    try {
        event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
    } catch (err) {
        console.error('Error verificando firma del webhook:', err);
        return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
    }

    // Orden cronológico aproximado de eventos para un pago exitoso
    switch (event.type) {
        // 1. Se crea el PaymentIntent (antes de que el cliente pague)
        case 'payment_intent.created':
            const piCreated = event.data.object as Stripe.PaymentIntent;
            console.log(`[1] PaymentIntent creado: ${piCreated.id}`);
            break;

        // 2. El cargo a la tarjeta fue exitoso (dinero capturado)
        case 'charge.succeeded':
            const charge = event.data.object as Stripe.Charge;
            console.log(`[2] Cargo exitoso: ${charge.id}, monto: ${charge.amount / 100} ${charge.currency}`);
            // Aquí podrías registrar el cargo, pero aún no es 100% definitivo (puede haber disputa después)
            break;

        // 3. El PaymentIntent se completó con éxito (esto es casi simultáneo a charge.succeeded)
        case 'payment_intent.succeeded':
            const pi = event.data.object as Stripe.PaymentIntent;
            console.log(`[3] PaymentIntent exitoso: ${pi.id}`);
            // Seguro para activar servicios, pero ojo con disputas posteriores
            break;

        // 4. La sesión de Checkout se completó (incluye toda la orden)
        case 'checkout.session.completed':
            const session = event.data.object as Stripe.Checkout.Session;
            const metadata_completed = session.metadata || undefined as {
                leadId?: string;
                serviceId?: string;
                paymentId?: string;
            } | undefined;

            if (!metadata_completed) {
                console.log(`Metadata del PaymentIntent completed:`, metadata_completed);
                break;
            }

            // Verificar que el pago esté efectivamente pagado (por si acaso)
            if (session.payment_status !== 'paid') {
                console.warn(`Sesión ${session.id} no tiene payment_status=paid, ignorando.`);
                break;
            }

            await createPaymentWithHistory(metadata_completed.leadId, metadata_completed.paymentId, session.amount_total, "completed", `Pago completado`);

            // Procesar la orden (enviar email, actualizar DB, entregar producto)
            console.log(`Procesando orden para sesión ${session.id}`);
            break;

        // 5. Actualizaciones del cargo (p.ej., detalles de fraude, método de pago)
        case 'charge.updated':
            const updatedCharge = event.data.object as Stripe.Charge;
            console.log(`[5] Cargo actualizado: ${updatedCharge.id}`);
            // Revisa si tiene fraud_details: si stripe reporta fraude, debes anular la orden
            if (updatedCharge.fraud_details?.user_report === 'fraudulent') {
                console.warn(`⚠️ Cargo marcado como fraudulento: ${updatedCharge.id}`);
                // Aquí deberías revocar el acceso al producto o servicio
            }
            break;

        // ========== EVENTOS DE PROBLEMAS POSTERIORES ==========
        // El cliente disputa el cargo con su banco (puede ocurrir días o meses después)
        case 'charge.dispute.created':
            const dispute = event.data.object as Stripe.Dispute;
            const paymentIntentId = dispute.payment_intent as string | undefined;

            if (!paymentIntentId) {
                console.error('Dispute sin payment_intent asociado');
                break;
            }

            const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);
            const metadata_dispute_create = paymentIntent.metadata;

            if (!metadata_dispute_create) {
                console.log(`Metadata del PaymentIntent dispute:`, metadata_dispute_create);
                break;
            }

            await createPaymentWithHistory(metadata_dispute_create.leadId, metadata_dispute_create.paymentId, 0, "dispute", `Se creó una disputa por este pago. Investiga y responde a la disputa en el dashboard de Stripe.`);

            console.error(`🔴 Disputa creada para el cargo: ${dispute.charge as string}`);
            break;

        case 'charge.dispute.closed':
            const closedDispute = event.data.object as Stripe.Dispute;
            console.log(`Disputa resuelta para cargo ${closedDispute.charge}. Estado: ${closedDispute.status}`);
            if (closedDispute.status === 'lost') {
                console.error(`❌ Disputa perdida, se reversó el pago.`);
                // Acción: revocar acceso definitivamente
            }
            break;

        // Reembolso (puede ser iniciado por ti o por Stripe por disputa)
        case 'charge.refunded':
            const refund = event.data.object as Stripe.Charge;

            const paymentIntentRefundId = refund.payment_intent as string | undefined;
            if (!paymentIntentRefundId) {
                console.error('Refund sin payment_intent asociado');
                break;
            }

            const paymentIntentRefund = await stripe.paymentIntents.retrieve(paymentIntentRefundId);
            const metadata_refund_create = paymentIntentRefund.metadata;

            if (!metadata_refund_create) {
                console.log(`Metadata del PaymentIntent refund:`, metadata_refund_create);
                break;
            }

            await createPaymentWithHistory(metadata_refund_create.leadId, metadata_refund_create.paymentId, 0, "refunded", `Fondos retirados por reembolso.`);

            console.log(`🔄 Cargo reembolsado: ${refund.id}`);
            break;

        case 'charge.dispute.funds_withdrawn':
            const dispute2 = event.data.object as Stripe.Dispute;

            const paymentIntentId2 = dispute2.payment_intent as string | undefined;

            if (!paymentIntentId2) {
                console.error('Dispute sin payment_intent asociado');
                break;
            }

            const paymentIntent2 = await stripe.paymentIntents.retrieve(paymentIntentId2);
            const metadata_dispute_create2 = paymentIntent2.metadata;

            if (!metadata_dispute_create2) {
                console.log(`Metadata del PaymentIntent dispute:`, metadata_dispute_create2);
                break;
            }

            await createPaymentWithHistory(metadata_dispute_create2.leadId, metadata_dispute_create2.paymentId, 0, "dispute", `Fondos retirados por disputa. El cliente ganó la disputa y se reembolsó el pago. Revoca el acceso al producto/servicio si no lo has hecho ya.`);

            console.error(`🔴 Fondos retirados para la disputa: ${dispute2.charge as string}`);
            // Acción: suspender servicio, notificar al admin, investigar
            break;

        // Fallo en el pago (si ocurre en lugar de succeeded)
        case 'payment_intent.payment_failed':
            const failedPi = event.data.object as Stripe.PaymentIntent;
            const metadata_failed = failedPi.metadata || undefined as {
                leadId?: string;
                serviceId?: string;
                paymentId?: string;
            } | undefined; // Aseguramos que metadata sea undefined si no existe

            if (!metadata_failed) {
                console.log(`Metadata del PaymentIntent fallido:`, metadata_failed);
                break;
            }

            const message = getMessageRefund(failedPi.last_payment_error?.decline_code, failedPi.last_payment_error?.code);
            await createPaymentWithHistory(metadata_failed.leadId, metadata_failed.paymentId, failedPi.amount, "failed", `Pago fallido (${message})`);

            console.error(`❌ Pago fallido: ${failedPi.id}`);
            break;

        // Sesión expirada (usuario no completó pago a tiempo)
        case 'checkout.session.expired':
            const expiredSession = event.data.object as Stripe.Checkout.Session;
            console.log(`⏰ Sesión expirada: ${expiredSession.id}`);
            break;

        // Eventos de suscripción (si aplican)
        case 'invoice.payment_succeeded':
            console.log(`💰 Pago de suscripción exitoso`);
            break;

        case 'invoice.payment_failed':
            console.error(`⚠️ Pago de suscripción fallido`);
            break;

        default:
            console.log(`ℹ️ Evento no manejado: ${event.type}`);
    }

    return NextResponse.json({ received: true });
}