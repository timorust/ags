import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useTranslation } from 'react-i18next'


function Login() {

	const { t } = useTranslation()
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()

	const onSubmit = async data => {
		const userInfo = {
			email: data.email,
			password: data.password,
		}
		await axios
			.post('https://www.ags-az.com/user/login', userInfo)
			.then(res => {
				console.log(res.data)
				if (res.data) {
					toast.success('Login Successfully')
					document.getElementById('my_modal_3').close()
					setTimeout(() => {
						window.location.reload()
						localStorage.setItem('Users', JSON.stringify(res.data.user))
					}, 1000)
				}
			})
			.catch(err => {
				if (err.response) {
					console.log(err)
					toast.error('Error: ' + err.response.data.message)
					setTimeout(() => { }, 2000)
				}
			})
	}
	return (
		<div>
			<dialog id='my_modal_3' className='modal'>
				<div className='modal-box dark:bg-slate-900 dark:text-white'>
					<form onSubmit={handleSubmit(onSubmit)} method='dialog'>
						{/* if there is a button in form, it will close the modal */}
						<Link
							to='/'
							className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'
							onClick={() => document.getElementById('my_modal_3').close()}
						>
							✕
						</Link>

						<h3 className='font-bold text-lg'>{t('Login')}</h3>
						{/* Email */}
						<div className='mt-4 space-y-2'>
							<span>{t('Email')}</span>
							<br />
							<input
								type='email'
								placeholder={t('Enter your email')}
								className='w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white'
								{...register('email', { required: true })}
							/>
							<br />
							{errors.email && (
								<span className='text-sm text-red-500'>

									{t('This field is required')}
								</span>
							)}
						</div>
						{/* password */}
						<div className='mt-4 space-y-2'>
							<span>{t('Password')}</span>
							<br />
							<input
								type='password'
								placeholder={t('Enter your password')}
								className='w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white'
								{...register('password', { required: true })}
							/>
							<br />
							{errors.password && (
								<span className='text-sm text-red-500'>
									{t('This field is required')}
								</span>
							)}
						</div>

						{/* Button */}
						<div className='flex justify-around mt-6'>
							<button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>
								{t('Login')}
							</button>
							<p>
								{t('Not registered')}?
								<Link
									to='/signup'
									className='underline text-blue-500 cursor-pointer'
								>
									{t('Sign up')}
								</Link>{' '}
							</p>
						</div>
					</form>
				</div>
			</dialog>
		</div>
	)
}

export default Login
