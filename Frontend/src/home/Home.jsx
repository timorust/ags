import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import VideoWithDescription from '../components/VideoWithDescription'
import CountdownTimer from '../components/CountdownTimer'
import Hero from '../components/Hero'
import EventConference from '../components/EventConference'

function Home() {

	return (
		<>
			<CountdownTimer targetDate='2025-03-15T09:00:00' />
			<Navbar />
			<Banner />
			<Hero />
			<VideoWithDescription />
			<EventConference />
			<Footer />
		</>
	)
}

export default Home
