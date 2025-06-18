import express from "express"
import { getConference } from "../controller/conference.controller.js"

const router = express.Router()


router.get("/conference", getConference)

export default router