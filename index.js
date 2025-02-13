import express from "express"
import mongoose from "mongoose"
import conferenceRoute from "./route/conference.route.js"
import registrationRoute from "./route/registration.route.js"
import userRoute from "./route/user.route.js"
import path from "path"
import { fileURLToPath } from 'url'
import cors from "cors"
import paymentRoutes from "./route/payment.route.js"

// Resolving dirname for ES Module
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
app.use(express.json())

// Configure CORS
const corsOptions = {
    origin: 'https://ags-az.onrender.com',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true, // Cookies ו-Headers עם Authentication
    allowedHeaders: ['Content-Type', 'Authorization'],
    exposedHeaders: ['Content-Length', 'X-Response-Time'],
}
app.use(cors(corsOptions))

// Translate directory
app.use('/locales', express.static(path.join(__dirname, 'locales')))

// Environment variables
const PORT = process.env.PORT || 4003
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
app.use("/", conferenceRoute)
app.use("/registration", registrationRoute)
app.use("/user", userRoute)
app.use("/payment", paymentRoutes)

// Use the frontend app
app.use(express.static(path.join(__dirname, "Frontend", "dist")))

// Render frontend for any path
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "Frontend", "dist", "index.html"))
})

// Handle the root route
app.get("/", (req, res) => {
    res.send("Welcome to the API. Use /conference, /registration, or /user for specific routes.")
})

// Handle 404 errors
app.use((req, res, next) => {
    res.status(404).send({ error: "Route not found" })
})

// Start the server
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})
