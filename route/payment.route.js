import express from "express"
import processPayment, {
  getPaymentStatus,
} from "../controller/payment.controller.js"

const router = express.Router()

router.post("/", processPayment)
router.get("/status", getPaymentStatus)

export default router