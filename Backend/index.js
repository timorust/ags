import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"

import conferenceRoute from "./route/conference.route.js"
import registrationRoute from "./route/registration.route.js"
import userRoute from "./route/user.route.js"

// Load environment variables
dotenv.config()

const app = express()

// Enable CORS and JSON parsing
app.use(cors())
app.use(express.json())

// Environment variables
const PORT = process.env.PORT || 4002
const MONGODB_URI = process.env.MongoDB

// MongoDB connection function
const connectToDb = async () => {
    try {
        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("Connected to MongoDB")
    } catch (error) {
        console.error("Error connecting to MongoDB:", error)
        process.exit(1)
    }
}

// Establish the connection to the database
connectToDb()

// Setup routes
app.use("/conference", conferenceRoute)
app.use("/registration", registrationRoute)
app.use("/user", userRoute)

// Start the server
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})
