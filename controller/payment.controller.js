import Conference from "../model/conference.model.js"
import { createStripePayment } from "../utils/stripeUtils.js"

export default async function processPayment(req, res) {
        try {
                const { conferenceId, token } = req.body

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

                const product = {
                        name: conference.name,
                        price: conference.price,
                }

                const charge = await createStripePayment(product, token)

                return res.status(200).json(charge)
        } catch (error) {
                return res.status(500).json({
                        error: error.message,
                })
        }
}