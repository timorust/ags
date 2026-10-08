import Conference from "../model/conference.model.js"
import { createStripePayment } from "../utils/stripeUtils.js"

const PAYABLE_CONFERENCE_ID = "676bace0326a947b99e7b610"
const CONFERENCE_PRICE_USD = 100

export default async function processPayment(req, res) {
        try {
                const { conferenceId, token } = req.body

                if (conferenceId !== PAYABLE_CONFERENCE_ID) {
                        return res.status(400).json({
                                error: "Payment is not available for this conference",
                        })
                }

                const conference = await Conference.findById(conferenceId).lean()

                if (!conference) {
                        return res.status(404).json({
                                error: "Conference not found",
                        })
                }

                const product = {
                        name: conference.name,
                        price: CONFERENCE_PRICE_USD,
                }

                const charge = await createStripePayment(product, token)

                return res.status(200).json(charge)
        } catch (error) {
                return res.status(500).json({
                        error: error.message,
                })
        }
}