import { createPaymentWithHistory } from '@/lib/payment';
import { PaymentViewIndex } from '@/modules/payment/PaymentViewIndex';
import { PaymentViewDataType } from '@/types/PaymentViewDataType';
import Stripe from 'stripe';

export const dynamic = 'force-dynamic';

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
if (!stripeSecretKey) {
    throw new Error('Falta STRIPE_SECRET_KEY en las variables de entorno');
}

const stripe = new Stripe(stripeSecretKey, {
    apiVersion: process.env.NEXT_PUBLIC_API_VERSION,
});

async function fetchSessionData(sessionId: string): Promise<PaymentViewDataType> {
    const session = await stripe.checkout.sessions.retrieve(sessionId, {
        expand: ['line_items', 'customer_details'],
    });

    return {
        sessionId: session.id,
        customerName: session.customer_details?.name ?? 'Cliente',
        customerEmail: session.customer_details?.email ?? 'sin email',
        amountTotal: (session.amount_total ?? 0) / 100,
        currency: session.currency?.toUpperCase() ?? 'USD',
        paymentStatus: session.payment_status ?? 'desconocido',
        lineItems:
            session.line_items?.data.map((item) => ({
                description: item.description,
                quantity: item.quantity,
                amountTotal: (item.amount_total ?? 0) / 100,
                currency: session.currency?.toUpperCase() ?? 'USD',
            })) ?? [],
    };
}

export default async function PaymentSuccessPage({
    searchParams,
}: {
    searchParams: Promise<{ session_id?: string, service_id?: string, payment_id?: string }>;
}) {
    const params = await searchParams;
    const sessionId = params.session_id;
    const paymentId = params.payment_id;
    const serviceId = params.service_id;

    // Caso: no hay session_id
    if (!sessionId)
        return (
            <PaymentViewIndex
                error="No se recibió un ID de sesión válido."
            />
        );
    else if (!paymentId)
        return (
            <PaymentViewIndex
                error="No se recibió un ID de pago válido."
            />
        );
    else if (!serviceId)
        return (
            <PaymentViewIndex
                error="No se recibió un ID del servicio válido."
            />
        );

    try {
        const data = await fetchSessionData(sessionId);

        console.log("paymentId", paymentId)
        await createPaymentWithHistory("", paymentId, 0, "failed", `Pago rechazado o cancelado por el usuario. No se completó el pago.`);

        return <PaymentViewIndex data={data} />;
    } catch (error) {
        console.error('Error al recuperar la sesión de Stripe:', error);
        return (
            <PaymentViewIndex error="Error al verificar el pago. Por favor, contacta a soporte." />
        );
    }
}