import Stripe from 'stripe';
import { PaymentViewIndex } from '@/modules/payment/PaymentViewIndex';
import { PaymentViewDataType } from '@/types/PaymentViewDataType';

export const dynamic = 'force-dynamic';

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
if (!stripeSecretKey) {
    throw new Error('Falta STRIPE_SECRET_KEY en las variables de entorno');
}

const stripe = new Stripe(stripeSecretKey, {
    apiVersion: '2026-03-25.dahlia',
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
    searchParams: Promise<{ session_id?: string }>;
}) {
    const params = await searchParams;
    const sessionId = params.session_id;

    // Caso: no hay session_id
    if (!sessionId) {
        return (
            <PaymentViewIndex
                error="No se recibió un ID de sesión válido."
            />
        );
    }

    try {
        const data = await fetchSessionData(sessionId);
        console.log("data", data)
        return <PaymentViewIndex data={data} />;
    } catch (error) {
        console.error('Error al recuperar la sesión de Stripe:', error);
        return (
            <PaymentViewIndex error="Error al verificar el pago. Por favor, contacta a soporte." />
        );
    }
}