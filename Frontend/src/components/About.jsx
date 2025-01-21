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
		'https://scontent.ftlv5-1.fna.fbcdn.net/v/t1.6435-9/54519863_395658020985029_4037793252840046592_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=JIKGAE8H4bMQ7kNvgGWCaLG&_nc_zt=23&_nc_ht=scontent.ftlv5-1.fna&_nc_gid=ApLVVzSKmpRAICfkCQ925cB&oh=00_AYBMK3lYvWCTMMwN8lEHbC_yuiX0MyWQnuLJbyYpfUNzFQ&oe=67B65E79',
		'https://scontent.ftlv5-1.fna.fbcdn.net/v/t39.30808-6/473041101_1711674712716680_4082012573429841953_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=8nnKhtFSkAMQ7kNvgF6kd1e&_nc_zt=23&_nc_ht=scontent.ftlv5-1.fna&_nc_gid=ALJVBRKJCk5pXZNPoK-_G7g&oh=00_AYAaofgIPmXvKzAjMpMTxrFGJV4Q1K6t27DQTckkWoXaHA&oe=6794A8A6',
		'https://scontent.ftlv5-1.fna.fbcdn.net/v/t39.30808-6/473117477_1711674109383407_6099483338691208202_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=thnwNFEysrkQ7kNvgEq_R_o&_nc_zt=23&_nc_ht=scontent.ftlv5-1.fna&_nc_gid=AuQJq1gNKOflgYfmD3O1y1o&oh=00_AYD0VwWDTa9UtjMylnFZEmtMur_V9llfS3m0YOrefFLAwA&oe=6794D7DA',
		'https://scontent.ftlv5-1.fna.fbcdn.net/v/t1.6435-9/54255698_395658477651650_5148660954535297024_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=PVlFPdpVwnwQ7kNvgHE2z0K&_nc_zt=23&_nc_ht=scontent.ftlv5-1.fna&_nc_gid=A5YENtyk7dw7OeZS-h2nGSY&oh=00_AYDPNlhQ624YQKmAKcPjySqQ2GzmiKm0OE02UJvsl-Hipg&oe=67B673E4',

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
							className={`absolute w-full h-auto rounded-t-lg object-cover ${index === imageIndex ? 'opacity-100' : 'opacity-0'
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
