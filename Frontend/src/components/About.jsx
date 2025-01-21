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
		'Welcome to our event! We are excited to have you.',
		'Our mission is to bring people together.',
		"Don't forget to check out our gallery!",
		'Stay tuned for more updates about our upcoming events.',
		'Stay tuned for more updates about our upcoming events.',
		'Stay tuned for more updates about our upcoming events.',
		'Stay tuned for more updates about our upcoming events.',
	]

	const images = [
		'https://scontent.ftlv5-1.fna.fbcdn.net/v/t39.30808-6/472925064_1711675439383274_5789284051879283593_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=EUDza2bR828Q7kNvgE_NBPm&_nc_zt=23&_nc_ht=scontent.ftlv5-1.fna&_nc_gid=AIe51nJlb1f3cbGPZlFwtGP&oh=00_AYDcII2Q_2qb2vE7JDYg_ftMzsH6Q02J1PFTF8gdVY0iQA&oe=6794BBE7',
		'/meeting2.jpg',
		'/meeting1.jpg',
		'/meeting2.jpg',
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
			<CountdownTimer targetDate='2025-03-15T09:00:00'/>
			<div className='max-w-screen-2xl container mx-auto px-6 md:px-20'>
				<div className='text-center mb-12'>
					<h1 className='text-3xl md:text-5xl font-semibold dark:text-white text-black'>
					{t('We`re delighted to have you')},
						<span className='text-yellow-500'>{t('Here')}! :)</span>
					</h1>
				</div>

				<div className='relative w-full h-96 mb-12 overflow-hidden rounded-md shadow-lg'>
					{images.map((image, index) => (
						<img
							key={index}
							src={image}
							alt={`Image ${index + 1}`}
							className={`absolute w-full h-auto rounded-t-lg object-cover ${
								index === imageIndex ? 'opacity-100' : 'opacity-0'
							}`}
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

				<div className='text-center mt-8'>
					<Link to='/'>
						<button className='bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-700 transition duration-300'>
							{t('Back')}
						</button>
					</Link>
				</div>
			</div>
			<Footer />
		</>
	)
}

export default About
