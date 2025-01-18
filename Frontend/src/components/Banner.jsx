import banner from '../assets/banner.png'
import { useTranslation } from 'react-i18next'

function Banner() {
	const { t } = useTranslation()
	return (
		<>
			<div className='max-w-screen-2xl container mx-auto md:px-20 px-6 flex flex-col md:flex-row my-10'>
				<div className='w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36 overflow-hidden'>
					<div className='space-y-8'>
						<h1 className='text-2xl md:text-4xl font-bold'>
							{t('The Azerbaijan Glaucoma Society')}
						</h1>
						{/* <p className='text-sm md:text-xl eading-relaxed tracking-wide whitespace-pre-line break-words text-gray-500  dark:bg-slate-900 dark:text-green-100'>
							{t('Description')}
						</p> */}
						<p className="text-base md:text-lg leading-relaxed tracking-normal text-gray-500 
dark:text-gray-300 font-light">
							{t('Description')}
						</p>
					</div>
					<div className='grid grid-flow-col gap-4 mt-10 pt-10'>
						{/* Twitter */}
						<a
							href='https://twitter.com'
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
								<path d='M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z'></path>
							</svg>
						</a>
						{/* YouTube */}
						<a
							href='https://youtube.com'
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
							href='https://facebook.com'
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
					{/* <button className='btn mt-6 bg-green-500 text-white hover:bg-green-700'>
						{t('Get Started')}
					</button> */}
				</div>
				<div className='order-1 w-full mt-20 md:w-1/2 flex justify-center md:justify-start overflow-hidden mr-10 ml-10 pt-10 pb-10 pr-10'>
					 <img
						src={banner}
						alt='banner'
						className='w-full h-full object-cover'
					/>
				</div>
			</div>
		</>
	)
}

export default Banner
