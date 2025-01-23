import { useState } from 'react'
import axios from 'axios'
import Navbar from './Navbar'
import Footer from './Footer'
import CountdownTimer from './CountdownTimer'
import { useTranslation } from 'react-i18next'

function RegisterLecture() {

	const { t } = useTranslation()

	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		phone: '',
		age: '',
		lecture: '',
		email: '',
	})

	const [isRegistered, setIsRegistered] = useState(false)

	const handleChange = e => {
		setFormData({ ...formData, [e.target.name]: e.target.value })
	}

	const handleSubmit = async e => {
		e.preventDefault()

		try {
			await axios.post('https://ags-az.onrender.com/registration', formData)
			setIsRegistered(true)
		} catch (error) {
			console.error(
				'Error during registration:',
				error.response || error.message
			)
			alert('Failed to register. Please try again.')
		}
	}

	return (
		<>
			<Navbar />
			<CountdownTimer targetDate='2025-03-15T09:00:00' />
			<div className='max-w-screen-2xl container mx-auto md:px-20 px-6 mb-10'>
				{isRegistered ? (
					<div className='text-center mt-12'>
						<h2 className='text-2xl text-green-500'>
							{t('Thank you for registering')}!
						</h2>
						<p>{t('We look forward to seeing you at the lecture')}.</p>
					</div>
				) : (
					<form onSubmit={handleSubmit} className='mt-12 max-w-lg mx-auto'>
						<div className='mb-6'>
							<label className='block text-left text-gray-700  dark:bg-slate-900 dark:text-green-300'>
								{t('First Name')}
							</label>
							<input
								type='text'
								name='firstName'
								value={formData.firstName}
								onChange={handleChange}
								className='w-full px-4 py-2 border rounded-md  dark:bg-slate-900 dark:text-white'
								placeholder={t('Enter your first name')}
								required
							/>
						</div>
						<div className='mb-6'>
							<label className='block text-left text-gray-700 dark:bg-slate-900 dark:text-green-300'>
								{t('Last Name')}
							</label>
							<input
								type='text'
								name='lastName'
								value={formData.lastName}
								onChange={handleChange}
								className='w-full px-4 py-2 border rounded-md  dark:bg-slate-900 dark:text-white'
								placeholder={t('Enter your last name')}
								required
							/>
						</div>
						<div className='mb-6'>
							<label className='block text-left text-gray-700 dark:bg-slate-900 dark:text-green-300'>
								{t('Phone')}
							</label>
							<input
								type='text'
								name='phone'
								value={formData.phone}
								onChange={handleChange}
								className='w-full px-4 py-2 border rounded-md  dark:bg-slate-900 dark:text-white'
								placeholder={t('Enter your phone number')}
								required
							/>
						</div>
						<div className='mb-6'>
							<label className='block text-left text-gray-700 dark:bg-slate-900 dark:text-green-300'>
								{t('Age')}
							</label>
							<input
								type='number'
								name='age'
								value={formData.age}
								onChange={handleChange}
								className='w-full px-4 py-2 border rounded-md  dark:bg-slate-900 dark:text-white'
								placeholder={t('Enter your age')}
								required
							/>
						</div>
						<div className='mb-6'>
							<label className='block text-left text-gray-700 dark:bg-slate-900 dark:text-green-300'>
								{t('Experience years')}
							</label>
							<input
								type='text'
								name='lecture'
								value={formData.lecture}
								onChange={handleChange}
								className='w-full px-4 py-2 border rounded-md  dark:bg-slate-900 dark:text-white'
								placeholder={t('Enter experience years')}
								required
							/>
						</div>
						<div className='mb-6'>
							<label className='block text-left text-gray-700 dark:bg-slate-900 dark:text-green-300'>
								{t('Email')}
							</label>
							<input
								type='email'
								name='email'
								value={formData.email}
								onChange={handleChange}
								className='w-full px-4 py-2 border rounded-md  dark:bg-slate-900 dark:text-white'
								placeholder={t('Enter your email')}
								required
							/>
						</div>
						<button
							type='submit'
							className='w-full bg-green-500 text-white px-4 py-2 rounded-md'
						>
							{t('Register')}
						</button>
					</form>
				)}
			</div>
			<Footer />
		</>
	)
}

export default RegisterLecture