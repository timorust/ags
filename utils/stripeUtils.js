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
