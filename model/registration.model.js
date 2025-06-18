import mongoose from "mongoose"

const RegistrationSchema = new mongoose.Schema({
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	age: { type: Number, required: true },
	phone: { type: String, required: true },
	lecture: { type: String, required: true },
	email: { type: String, required: true },
	identityCard: { type: String, required: true },  
	finCode: { type: String, required: true },       
})

export default mongoose.models.Registration ||
	mongoose.model("Registration", RegistrationSchema)
