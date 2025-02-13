import express from "express"
import processPayment from "../controller/payment.controller.js"
const router = express.Router()

router.post("/", processPayment)

export default router