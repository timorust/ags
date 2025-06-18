import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Contact from '../components/Contact'
import VideoWithDescription from '../components/VideoWithDescription'
// import CountdownTimer from '../components/CountdownTimer'
import Hero from '../components/Hero'
import EventConference from '../components/EventConference'
// import CountdownTimerAlert from '../components/CountdownTimerAlert'

function Home() {

	return (
		<>
			{/* <CountdownTimer targetDate='2025-03-15T09:00:00' /> */}
			{/* <CountdownTimerAlert targetDate='2025-03-15T09:00:00' /> */}
			<Navbar />
			<Banner />
			<VideoWithDescription />
			<Hero />
			<EventConference />
			<Contact/>
			<Footer />
		</>
	)
}

export default Home
