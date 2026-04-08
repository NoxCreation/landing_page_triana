import { createPaymentWithHistory, registerLead } from "@/lib/payment";
import Stripe from "stripe";

export const runtime = "nodejs";

const key = process.env.STRIPE_SECRET_KEY

if (!key) {
  throw new Error("Falta la clave pública de Stripe");
}

const stripe = new Stripe(key, {
  apiVersion: process.env.NEXT_PUBLIC_API_VERSION || "2026-03-25.dahlia",
});

// TODO: Adaptar luego con la autenticacion y el id del servicio a pagar
export async function POST(req: Request) {

  try {
    const {
      name,
      price,

      serviceId,
      first_name,
      last_name,
      email,
      phone,
      country_code
    } = await req.json();

    console.log("Registrando lead")
    const leadId = await registerLead(
      first_name,
      last_name,
      email,
      phone,
      country_code
    )
    console.log("Lead registrado con ID:", leadId)

    // Registrando el pago
    console.log("Registrando pago con historial")
    const { paymentId } = await createPaymentWithHistory(leadId, undefined, price, "pending", "Pago pendiente");

    console.log("Creando sesión de Stripe")
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: { name },
            unit_amount: price * 100,
          },
          quantity: 1,
        },
      ],
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/payment/success?session_id={CHECKOUT_SESSION_ID}&service_id=${serviceId}&payment_id=${paymentId}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/payment/cancel?session_id={CHECKOUT_SESSION_ID}&service_id=${serviceId}&payment_id=${paymentId}`,
      metadata: {
        leadId,
        serviceId,
        paymentId
      },
      payment_intent_data: {
        metadata: {
          leadId,
          serviceId,
          paymentId
        },
      },
      
    });

    return Response.json({ url: session.url });
  } catch (error) {
    console.error("Stripe error:", error);
    return new Response(`Error creating session: ${error}`, { status: 500 });
  }
}