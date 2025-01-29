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
		'The Azerbaijan Glaucoma Society (AGS) is an organization that unites glaucoma specialists and shares their clinical and scientific knowledge for the benefit of glaucoma patients',
	]

	const images = [
		'https://baki-xeber.com/uploads/posts/2024-04/zarifa_aliyeva_260414_01.webp',
		'https://sia.az/storage/2023/01/24/zerife_eliyeva.jpg',
		'https://scontent.ftlv5-1.fna.fbcdn.net/v/t1.6435-9/54255698_395658477651650_5148660954535297024_n.jpg',
		'https://scontent.ftlv5-1.fna.fbcdn.net/v/t39.30808-6/473117477_1711674109383407_6099483338691208202_n.jpg',
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
			<div className='max-w-screen-2xl container mx-auto px-6 md:px-20 mb-10'>
				<div className='mt-28 items-center justify-center text-center'>
					<h1 className="text-2xl md:text-4xl">
						{t('AboutTitle')}<span className="text-yellow-500">!</span>
					</h1>
				</div>

				{/* שיפור: התאמת גודל תמונות לפי רזולוציה */}
				<div className="relative w-full h-64 sm:h-96 lg:h-[500px] xl:h-[600px] overflow-hidden rounded-md shadow-lg sm:mb-12 mb-0 sm:p-4 p-0">
					{images.map((image, index) => (
						<img
							key={index}
							src={image}
							srcSet={`
								${image}?w=480 480w,
								${image}?w=768 768w,
								${image}?w=1024 1024w,
								${image}?w=1280 1280w,
								${image}?w=1920 1920w
							`}
							sizes="(max-width: 640px) 100vw, 
							 (max-width: 1024px) 90vw, 
							 (max-width: 1280px) 80vw, 
							 70vw"
							alt={`Image ${index + 1}`}
							className={`absolute inset-0 w-full h-full max-w-[100vw] object-cover rounded-t-lg transition-all duration-500 ${index === imageIndex ? 'opacity-100' : 'opacity-0'}`}
						/>
					))}
				</div>

				<div className='bg-gray-100 dark:bg-blue-300 p-4 rounded-md shadow-md mb-12'>
					<div className='text-xl dark:text-white text-gray-700 marquee-container' style={{ whiteSpace: 'nowrap', overflow: 'hidden', width: '100%' }}>
						<div className='marquee-text' style={{ display: 'inline-block', paddingLeft: '100%', animation: 'marquee 10s linear infinite' }}>
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
