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

      first_name,
      last_name,
      email,
      phone
    } = await req.json();

    console.log({
      first_name,
      last_name,
      email,
      phone
    })

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
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/payment/success?session_id={CHECKOUT_SESSION_ID}&serviceId=4545&userId=1234`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/payment/cancel?session_id={CHECKOUT_SESSION_ID}&serviceId=4545&userId=1234`,
    });

    return Response.json({ url: session.url });
  } catch (error) {
    console.error("Stripe error:", error);
    return new Response("Error creating session", { status: 500 });
  }
}