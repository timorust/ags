import banner from '../assets/banner.png'
import { useTranslation } from 'react-i18next'

function Banner() {
	const { t } = useTranslation()
	return (
		<>
			<div className='max-w-screen-2xl container mx-auto md:px-20 px-6 flex flex-col md:flex-row my-10 pt-16'>
				<div className='w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36'>
					<div className='space-y-8'>
						<h1 className='text-2xl md:text-4xl font-bold'>
						<span className='text-yellow-500'>{t('Azerbaijan Glaucoma Society')}</span>
							
						</h1>

						<p className="text-base md:text-lg text-justify leading-relaxed tracking-normal text-gray-500 dark:text-gray-300 font-light">
							{t('Description')}
						</p>


					</div>
					<div className='grid grid-flow-col gap-4 mt-10 pt-10'>
						{/* Twitter */}
						<a
							href="https://x.com/glaucomaaz"
							target="_blank"
							rel="noopener noreferrer"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								className="fill-current"
							>
								<path d="M4 4L20 20M20 4L4 20" stroke="currentColor" strokeWidth="2" />
							</svg>
						</a>
						{/* Linkedin */}
						<a
							href="http://linkedin.com/in/azerbaijan-glaucoma-society-866084348"
							target="_blank"
							rel="noopener noreferrer"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								className="fill-current"
							>
								<path d="M19 0H5C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM8.339 19H5.339V9h3v10zm-1.5-11.5c-.967 0-1.75-.784-1.75-1.75S5.872 4 6.839 4c.967 0 1.75.784 1.75 1.75s-.783 1.75-1.75 1.75zm13.161 11.5h-3v-5.7c0-1.361-.027-3.115-1.9-3.115-1.902 0-2.193 1.486-2.193 3.02V19h-3V9h2.881v1.369h.041c.401-.757 1.381-1.556 2.842-1.556 3.041 0 3.6 2.001 3.6 4.601V19z" />
							</svg>
						</a>

						{/* YouTube */}
						<a
							href='https://www.youtube.com/channel/UC85NArLz-MnZhF5hjeV_2KA'
							target='_blank'
							rel='noopener noreferrer'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								viewBox='0 0 24 24'
								className='fill-current'
							>
								<path d='M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z'></path>
							</svg>
						</a>
						{/* Facebook */}
						<a
							href='https://www.facebook.com/profile.php?id=61572442263665&sk=about&locale=az_AZ'
							target='_blank'
							rel='noopener noreferrer'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								viewBox='0 0 24 24'
								className='fill-current'
							>
								<path d='M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z'></path>
							</svg>
						</a>
						{/* Instagram */}
						<a
							href='https://www.instagram.com/azerbaijan_glaucoma_society/profilecard/?igsh=bms5aDd5Ym9yajd3'
							target='_blank'
							rel='noopener noreferrer'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								viewBox='0 0 24 24'
								className='fill-current'
							>
								<path d='M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.36 3.608 1.335.975.975 1.273 2.242 1.335 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.36 2.633-1.335 3.608-.975.975-2.242 1.273-3.608 1.335-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.36-3.608-1.335-.975-.975-1.273-2.242-1.335-3.608-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.062-1.366.36-2.633 1.335-3.608.975-.975 2.242-1.273 3.608-1.335 1.265-.058 1.645-.07 4.849-.07zm0-2.163c-3.259 0-3.667.012-4.947.072-1.49.066-2.892.394-4.007 1.509-1.115 1.115-1.443 2.517-1.509 4.007-.06 1.28-.072 1.688-.072 4.947s.012 3.667.072 4.947c.066 1.49.394 2.892 1.509 4.007 1.115 1.115 2.517 1.443 4.007 1.509 1.28.06 1.688.072 4.947.072s3.667-.012 4.947-.072c1.49-.066 2.892-.394 4.007-1.509 1.115-1.115 1.443-2.517 1.509-4.007.06-1.28.072-1.688.072-4.947s-.012-3.667-.072-4.947c-.066-1.49-.394-2.892-1.509-4.007-1.115-1.115-2.517-1.443-4.007-1.509-1.28-.06-1.688-.072-4.947-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.324c-2.296 0-4.162-1.866-4.162-4.162s1.866-4.162 4.162-4.162 4.162 1.866 4.162 4.162-1.866 4.162-4.162 4.162zm6.406-11.845c-.796 0-1.44-.644-1.44-1.44s.644-1.44 1.44-1.44 1.44.644 1.44 1.44-.644 1.44-1.44 1.44z' />
							</svg>
						</a>

					</div>

				</div>
				<div className='order-1 w-full mt-8 md:w-1/2 flex justify-center md:justify-start overflow-hidden mr-10 ml-10 pt-10 pb-10 pr-10 sm:mr-8'>
					<img
						src={banner}
						alt='Banner'
						className='w-[90%] max-w-[450px] md:w-[550px] md:h-[460px] md:ml-12 object-contain rounded-lg animate-slideIn transition-transform duration-1000 ease-in-out'
					/>
				</div>
			</div>
		</>
	)
}

export default Banner
