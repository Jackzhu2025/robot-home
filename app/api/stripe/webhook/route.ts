import Stripe from "stripe"

export async function POST(req: Request) {
  if (!process.env.STRIPE_SECRET_KEY || !process.env.STRIPE_WEBHOOK_SECRET) {
    return new Response("demo webhook ok")
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2025-02-24.acacia"
  })

  const body = await req.text()
  const signature = req.headers.get("stripe-signature")

  try {
    stripe.webhooks.constructEvent(body, signature!, process.env.STRIPE_WEBHOOK_SECRET)
  } catch (error) {
    return new Response("Webhook signature verification failed", { status: 400 })
  }

  return new Response("ok")
}
