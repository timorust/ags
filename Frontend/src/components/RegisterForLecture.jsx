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
			<div className="flex flex-col md:flex-row justify-center items-center md:space-x-6 mt-10">
				{/* הוספתי margin ו-padding לכרטיס והחלפתי בין המונה לכרטיס */}
				{/* <div className="card card-side bg-base-100 shadow-xl p-6 mr-20 m-4 mt-20 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl dark:bg-slate-900 dark:text-white">
					<figure>
						<img
							src="https://media.licdn.com/dms/image/v2/D5603AQFcR0SmWJ_oQw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1719331799359?e=1742428800&v=beta&t=U0um6HtEHcwHz_thL7tN0ynKEPOeQQ5tW6HajXlnXz0"
							alt="Dr. Jamil Hasanov"
							className="w-32 sm:w-40 md:w-48 lg:w-56"
						/>
					</figure>
					<div className="card-body bg-base-100">
						<h2 className="card-title">Dr. Jamil Hasanov PhD!</h2>
						<p>Zarifa Aliyeva National Eye Centre</p>
						<div className="card-actions justify-end">
							<button className="btn btn-primary">For reference</button>
						</div>
					</div>
				</div> */}
				<div className="w-full flex justify-center sm:justify-between card mx-auto card-side bg-base-100 shadow-xl p-6 m-4 mt-20 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl dark:bg-slate-900 dark:text-white">
					<figure className="w-full flex justify-center">
						<img
							src="https://media.licdn.com/dms/image/v2/D5603AQFcR0SmWJ_oQw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1719331799359?e=1742428800&v=beta&t=U0um6HtEHcwHz_thL7tN0ynKEPOeQQ5tW6HajXlnXz0"
							alt="Dr. Jamil Hasanov"
							className="w-32 sm:w-40 md:w-48 lg:w-56 dark:bg-slate-900 dark:text-white"
						/>
					</figure>
					<div className="card-body bg-base-100 w-full flex flex-col items-center dark:bg-slate-900 dark:text-white">
						<h2 className="card-title text-center">Dr. Jamil Hasanov PhD!</h2>
						<p className="text-center">Zarifa Aliyeva National Eye Centre</p>
						<div className="card-actions justify-end w-full flex justify-center">
							<button className="btn btn-primary">For reference</button>
						</div>
					</div>
				</div>





				{/* המונה נמצא בצד השני */}
				<CountdownTimer targetDate='2025-03-15T09:00:00' />
			</div>

			<div className='max-w-screen-2xl container mx-auto md:px-20 px-6 mt-12'>
				{isRegistered ? (
					<div className='text-center'>
						<h2 className='text-2xl text-green-500'>
							{t('Thank you for registering')}!
						</h2>
						<p>{t('We look forward to seeing you at the lecture')}.</p>
					</div>
				) : (
					<form onSubmit={handleSubmit} className='max-w-lg mx-auto'>
						<div className='mb-6'>
							<label className='block text-left text-gray-700 dark:bg-slate-900 dark:text-green-300'>
								{t('First Name')}
							</label>
							<input
								type='text'
								name='firstName'
								value={formData.firstName}
								onChange={handleChange}
								className='w-full px-4 py-2 border rounded-md dark:bg-slate-900 dark:text-white'
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
								className='w-full px-4 py-2 border rounded-md dark:bg-slate-900 dark:text-white'
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
								className='w-full px-4 py-2 border rounded-md dark:bg-slate-900 dark:text-white'
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
								className='w-full px-4 py-2 border rounded-md dark:bg-slate-900 dark:text-white'
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
								className='w-full px-4 py-2 border rounded-md dark:bg-slate-900 dark:text-white'
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
								className='w-full px-4 py-2 border rounded-md dark:bg-slate-900 dark:text-white'
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
