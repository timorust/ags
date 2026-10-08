import Conference from "../model/conference.model.js"
import {
  createCheckoutSession,
  retrieveCheckoutSession,
} from "../utils/stripeUtils.js"
export default async function processPayment(req, res) {
        try {
                const { conferenceId } = req.body

                if (!conferenceId) {
                        return res.status(400).json({
                                error: "Conference ID is required",
                        })
                }

                const conference = await Conference.findById(conferenceId).lean()

                if (!conference) {
                        return res.status(404).json({
                                error: "Conference not found",
                        })
                }

                if (conference.paymentEnabled !== true) {
                        return res.status(400).json({
                                error: "Payment is not available for this conference",
                        })
                }

                if (!Number.isFinite(conference.price) || conference.price <= 0) {
                        return res.status(500).json({
                                error: "Conference price is invalid",
                        })
                }

                const session = await createCheckoutSession(conference)

return res.status(200).json({
        url: session.url,
})
        } catch (error) {
                console.error("Checkout creation failed:", error.message)

return res.status(500).json({
        error: "Unable to create checkout session",
})
        }
}

export const getPaymentStatus = async (req, res) => {
  res.set("Cache-Control", "no-store")

  const { sessionId } = req.query

  if (
    typeof sessionId !== "string" ||
    !/^cs_(test_|live_)?[A-Za-z0-9]+$/.test(sessionId) ||
    sessionId.length > 255
  ) {
    return res.status(400).json({
      error: "A valid checkout session ID is required",
    })
  }

  try {
    const session = await retrieveCheckoutSession(sessionId)
    const conferenceId = session.metadata?.conferenceId

    if (
      !conferenceId ||
      session.client_reference_id !== conferenceId ||
      session.mode !== "payment"
    ) {
      return res.status(400).json({
        error: "This checkout session is not a conference payment",
      })
    }

    return res.status(200).json({
      paid:
        session.status === "complete" &&
        session.payment_status === "paid",
    })
  } catch (error) {
    console.error("Payment status check failed:", error.message)

    if (error.code === "resource_missing") {
      return res.status(404).json({
        error: "Checkout session not found",
      })
    }

    return res.status(500).json({
      error: "Unable to verify payment",
    })
  }
}