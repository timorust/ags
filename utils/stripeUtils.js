import { v4 as uuidv4 } from "uuid"
import Stripe from "stripe"

const stripe = new Stripe(process.env.REACT_STRIPE_SECRET_KEY);

export const createStripePayment = async (product, token) => {
  try {

    if (!token || !token.email || !token.id) {
      throw new Error("Missing token data")
    }

    const idempotencyKey = uuidv4()

    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    })

    if (!customer.id) {
      throw new Error("Failed to create Stripe customer")
    }

    const charge = await stripe.charges.create(
      {
        customer: customer.id,
        amount: product.price * 100,
        currency: "usd",
        receipt_email: token.email,
        description: `Purchase of ${product.name}`,
        shipping: {
          name: token.card.name,
        },
      },
      { idempotencyKey }
    )

    return charge
  } catch (error) {
    console.error("Payment processing failed:", error.message)
    throw error
  }
}

export const createCheckoutSession = async conference => {
  const baseUrl = process.env.APP_BASE_URL

  if (!baseUrl) {
    throw new Error("APP_BASE_URL is missing")
  }

  const origin = new URL(baseUrl).origin
  const conferenceId = conference._id.toString()

  return stripe.checkout.sessions.create({
    mode: "payment",
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: conference.name,
          },
          unit_amount: Math.round(conference.price * 100),
        },
        quantity: 1,
      },
    ],
    client_reference_id: conferenceId,
    metadata: {
      conferenceId,
    },
    success_url:
      `${origin}/meeting?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/meeting?checkout=cancelled`,
  })
}