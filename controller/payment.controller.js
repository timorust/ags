export default async function processPayment(req, res) {
	try {
		const { product, token } = req.body;
		const charge = await createStripePayment(product, token);
		res.status(200).json(charge);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
}
