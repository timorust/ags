import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import CountdownTimer from './CountdownTimer'
import { useTranslation } from 'react-i18next'

function About() {

	const { t } = useTranslation()
	const [textIndex, setTextIndex] = useState(0)
	const [imageIndex, setImageIndex] = useState(0)

	const textContent = [
		'The Azerbaijan Glaucoma Society (AGS) is an organization,that unites glaucoma specialists and shares their clinical, and scientific knowledge for the benefit of glaucoma patients'
	]

	const images = [
		'/about4.jpg',
		'/about5.png',
		'/about2.jpg',
		'/about3.jpg',
	]

	useEffect(() => {
		images.forEach(src => {
			const img = new Image()
			img.src = src
		})

		const interval = setInterval(() => {
			setTextIndex(prevIndex => (prevIndex + 1) % textContent.length)
			setImageIndex(prevIndex => (prevIndex + 1) % images.length)
		}, 4000)

		return () => clearInterval(interval)
	}, [textContent.length, images.length])

	return (
		<>
			<Navbar />
			<CountdownTimer targetDate='2025-03-15T09:00:00' />
			<div className='max-w-screen-lg container mx-auto px-4 md:px-12 mb-8'>
				<div className='mt-20 items-center justify-center text-center mb-8'>
					<h1 className="text-xl md:text-3xl">
						{t('AboutTitle')}<span className="text-yellow-500">!</span>
					</h1>
				</div>

				{/* <div className="relative w-full h-48 sm:h-64 lg:h-80 xl:h-96 overflow-hidden rounded-md shadow-lg sm:mb-8 mb-0 sm:p-2 p-0">
					{images.map((image, index) => (
						<img
							key={index}
							src={image}
							srcSet={` 
        ${image}?w=320 320w,
        ${image}?w=480 480w,
        ${image}?w=768 768w,
        ${image}?w=1024 1024w
      `}
							sizes="(max-width: 640px) 100vw, 
             (max-width: 1024px) 80vw, 
             (max-width: 1280px) 70vw, 
             60vw"
							alt={`Image ${index + 1}`}
							className={`absolute inset-0 w-full h-full max-w-[100vw] object-contain rounded-t-lg transition-all duration-500 ${index === imageIndex ? 'opacity-100' : 'opacity-0'} 
        sm:mb-8 mb-0 lg:mt-8`} // הוספנו את המרגין הרצוי
						/>
					))}
				</div> */}

				<div className="relative w-full h-48 sm:h-64 lg:h-80 xl:h-96 overflow-hidden rounded-lg shadow-lg sm:mb-8 mb-0 sm:p-2 p-0">
					{images.map((image, index) => (
						<img
							key={index}
							src={image}
							srcSet={` 
        ${image}?w=320 320w,
        ${image}?w=480 480w,
        ${image}?w=768 768w,
        ${image}?w=1024 1024w
      `}
							sizes="(max-width: 640px) 100vw, 
             (max-width: 1024px) 80vw, 
             (max-width: 1280px) 70vw, 
             60vw"
							alt={`Image ${index + 1}`}
							className={`absolute inset-0 w-full h-full max-w-[100vw] object-contain rounded-lg transition-all duration-500 ${index === imageIndex ? 'opacity-100' : 'opacity-0'} 
        sm:mb-8 mb-0 lg:mt-8`}
						/>
					))}
				</div>



				<div className='bg-gray-100 dark:bg-blue-300 p-4 rounded-md shadow-md mb-8 mt-8'>
					<div
						className='text-lg dark:text-white text-gray-700 marquee-container'
						style={{
							whiteSpace: 'nowrap',
							overflow: 'hidden',
							width: '100%',
						}}
					>
						<div
							className='marquee-text'
							style={{
								display: 'inline-block',
								paddingLeft: '100%',
								animation: 'marquee 10s linear infinite',
							}}
						>
							{textContent[textIndex]}
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	)
}

export default About
