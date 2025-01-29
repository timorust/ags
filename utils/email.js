import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()

const EMAIL_HOST = process.env.EMAIL_HOST
const EMAIL_PORT = process.env.EMAIL_PORT
const EMAIL_USER = process.env.EMAIL_USER
const EMAIL_PASS = process.env.EMAIL_PASS

if (!EMAIL_HOST || !EMAIL_PORT || !EMAIL_USER || !EMAIL_PASS) {
	console.error('Error: Missing required environment variables. Please check your .env file.')
	process.exit(1)
}

const transporter = nodemailer.createTransport({
	host: EMAIL_HOST,
	port: EMAIL_PORT,
	secure: false,
	auth: {
		user: EMAIL_USER,
		pass: EMAIL_PASS,
	},
})

export const sendRegistrationEmail = async (registrationData) => {
	const { firstName, lastName, phone, age, lecture, email } = registrationData

	const htmlMessage = `
		<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="UTF-8">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<title>Registration Confirmation</title>
			<style>
				body {
					font-family: Arial, sans-serif;
					background-color: #f4f4f4;
					margin: 0;
					padding: 20px;
				}
				.container {
					max-width: 600px;
					background: white;
					padding: 20px;
					border-radius: 10px;
					box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
				}
				h2 {
					color: #2c3e50;
				}
				p {
					font-size: 16px;
					color: #555;
				}
				.footer {
					margin-top: 20px;
					font-size: 14px;
					color: #888;
					text-align: center;
				}
			</style>
		</head>
		<body>
			<div class="container">
				<h2>AGC-2025 Registration🎉</h2>
				<p><strong>Name:</strong> ${firstName} ${lastName}</p>
				<p><strong>Phone:</strong> ${phone}</p>
				<p><strong>Age:</strong> ${age}</p>
				<p><strong>Experience years:</strong> ${lecture}</p>
				<p><strong>Email:</strong> ${email}</p>
				<hr>
				<p>Siz konfrans üçün uğurla qeydiyyatdan keçmisiniz.
                Hər hansı bir sualınız varsa, glaucomaaz@gmail.com ünvanında AGC-2025 konfransının təşkilatçısı ilə əlaqə saxlayın.
				</p>
				<p>Azərbaycan Qlaukomatoloqlarının VI Konfransının elmi proqramına verdiyiniz dəyərli töhfəyə görə təşəkkür edirik.</p>
				<p>Ən xoş arzularla,<br> Təşkilat Komitəs</p>
				<hr>
				<p>You have successfully registered for the conference.
                If you have any questions, please contact the AGC-2025 conference organizer at glaucomaaz@gmail.com.
				</p>
				<p>Thank you for your valuable contribution to the scientific program of the VI Conference of Azerbaijan Glaucomatologists.
				</p>
				<p>With best wishes,<br> Organizing Committee</p>
			</div>
		</body>
		</html>
	`

	const mailOptions = {
		from: EMAIL_USER,
		to: email,
		subject: 'Registration Confirmation',
		html: htmlMessage,
	}

	try {
		const info = await transporter.sendMail(mailOptions)
		console.log('Email sent successfully:', info.response)
	} catch (error) {
		console.error('Error sending email:', error)
	}
}
