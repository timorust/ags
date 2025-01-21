import axios from 'axios'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import Cards from './Cards'
import { useEffect } from 'react'
import { useState } from 'react'

function FreeConference() {
	const [conference, setConference] = useState([])

	useEffect(() => {
		const getConference = async () => {
			try {
				const res = await axios.get('https://ags-az.onrender.com/conference')
				const data = Array.isArray(res.data)
					? res.data.filter(d => d.category === 'Free')
					: []
				setConference(data)
			} catch (error) {
				console.error('Error fetching data:', error)
				setConference([])
			}
		}

		getConference()
	}, [])

	var settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	}

	return (
		<div className='max-w-screen-2xl container mx-auto md:px-20 px-4 py-12'>
			<div>
				<h1 className='font-semibold text-2xl md:text-3xl pb-4'>
					Free Offered Conferences
				</h1>
				<p className='text-gray-600 mb-6'>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
					veritatis alias pariatur ad dolor repudiandae eligendi corporis nulla
					non suscipit, iure neque earum?
				</p>

				<div className='slider-container'>
					{conference.length === 0 ? (
						<p>Loading or no conferences available...</p>
					) : (
						<Slider {...settings}>
							{conference.map(item => (
								<div className='px-2' key={item.id}>
									<Cards item={item} />
								</div>
							))}
						</Slider>
					)}
				</div>
			</div>
		</div>
	)
}

export default FreeConference
