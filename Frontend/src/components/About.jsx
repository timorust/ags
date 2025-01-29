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
		'The Azerbaijan Glaucoma Society (AGS) is an organization,that unites glaucoma specialists and shares their clinical, and scientific knowledge for the benefit of glaucoma patients',
		// 'that unites glaucoma specialists and shares their clinical',
		// "and scientific knowledge for the benefit of glaucoma patients",
		// "colleagues and residents. The main goal of the AGS is to provide, improve their quality of life",
		// "excellent and comprehensive care to all people with glaucoma and those at risk",
		// 'provide a collegial environment for AGS members to exchange ideas and opinions'
	]

	const images = [
		'https://baki-xeber.com/uploads/posts/2024-04/zarifa_aliyeva_260414_01.webp',
		'https://sia.az/storage/2023/01/24/zerife_eliyeva.jpg',
		'https://scontent.ftlv5-1.fna.fbcdn.net/v/t1.6435-9/54255698_395658477651650_5148660954535297024_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=PVlFPdpVwnwQ7kNvgHE2z0K&_nc_zt=23&_nc_ht=scontent.ftlv5-1.fna&_nc_gid=A5YENtyk7dw7OeZS-h2nGSY&oh=00_AYDPNlhQ624YQKmAKcPjySqQ2GzmiKm0OE02UJvsl-Hipg&oe=67B673E4',
		'https://scontent.ftlv5-1.fna.fbcdn.net/v/t39.30808-6/283672032_2096954183805126_7276582275136282506_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=MedKftGlUJcQ7kNvgE1nBsD&_nc_zt=23&_nc_ht=scontent.ftlv5-1.fna&_nc_gid=Ahy87AK6abrV50jfmSBOM99&oh=00_AYBwjur5hqATgI7y1H4c9Wl8oPCx88pMZpYlEfMyaHfnxg&oe=67A02DC6',


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

				{/* <div className="relative w-full h-96 overflow-hidden rounded-md shadow-lg sm:mb-12 mb-0 sm:p-4 p-0">
					{images.map((image, index) => (
						<img
							key={index}
							src={image}
							alt={`Image ${index + 1}`}
							className={`absolute w-full h-auto rounded-t-lg object-cover ${index === imageIndex ? 'opacity-100' : 'opacity-0'
								}`}
						/>
					))}
				</div> */}

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
					<div
						className='text-xl dark:text-white text-gray-700 marquee-container'
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

				{/* <div className='text-center mt-8'>
					<Link to='/'>
						<button className='rounded-full border-[2px] bg-green-500 text-white px-3 py-2 rounded-md hover:bg-green-700 duration-300 cursor-pointer'>
							{t('Back')}
						</button>
					</Link>
				</div> */}
			</div>
			<Footer />
		</>
	)
}

export default About
