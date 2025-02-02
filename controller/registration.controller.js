import Registration from "../model/registration.model.js";
import { sendRegistrationEmail } from "../utils/email.js";

export const createRegistration = async (req, res) => {
    try {
        const { firstName, lastName, phone, age, lecture, email, identityCard, finCode } = req.body;
        if (!firstName || !lastName || !phone || !age || !lecture || !email || !identityCard || !finCode) {
            return res.status(400).json({ error: "All fields are required" });
        }

        const existingUser = await Registration.findOne({
            $or: [{ email }, { identityCard }]
        });

        if (existingUser) {
            return res.status(400).json({ error: "You are already registered in the system" });
        }

        const newRegistration = new Registration({
            firstName,
            lastName,
            phone,
            age,
            lecture,
            email,
            identityCard,
            finCode
        });

        await newRegistration.save();

        await sendRegistrationEmail({ firstName, lastName, phone, age, lecture, email, identityCard, finCode });

        res.status(201).json({ message: "Registration successful!" });
    } catch (error) {
        console.error("Error creating registration:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

export const getRegistrations = async (req, res) => {
    try {
        const registrations = await Registration.find();
        res.status(200).json(registrations);
    } catch (error) {
        console.error("Error fetching registrations:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};
