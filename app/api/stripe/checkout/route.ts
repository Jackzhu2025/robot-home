import Stripe from "stripe"

export async function POST(req: Request) {
  const { email, userId } = await req.json()

  if (!process.env.STRIPE_SECRET_KEY || !process.env.NEXT_PUBLIC_STRIPE_PRICE_ID) {
    return Response.json({
      url: `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/pricing?demo_checkout=1`,
      note: "未配置 Stripe，返回演示链接。"
    })
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2025-02-24.acacia"
  })

  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    payment_method_types: ["card"],
    customer_email: email,
    client_reference_id: userId,
    line_items: [{ price: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID, quantity: 1 }],
    success_url: `${process.env.NEXT_PUBLIC_APP_URL}/account?success=true`,
    cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/pricing`
  })

  return Response.json({ url: session.url })
}
