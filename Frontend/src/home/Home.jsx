import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import FreeConference from '../components/FreeConference'
import VideoWithDescription from '../components/VideoWithDescription'
import CountdownTimer from '../components/CountdownTimer'
import Hero from '../components/Hero'
import VideoMeeting from '../components/VideoMeeting'
import EventConference from '../components/EventConference'

function Home() {
	const tableData = [
		{ id: 1, name: 'Cy Ganderton', job: 'Quality Control Specialist', color: 'Blue' },
		{ id: 2, name: 'Hart Hagerty', job: 'Desktop Support Technician', color: 'Purple' },
		{ id: 3, name: 'Brice Swyre', job: 'Tax Accountant', color: 'Red' },
		{ id: 4, name: 'Jane Doe', job: 'Software Engineer', color: 'Green' },
	  ];
	return (
		<>
			<CountdownTimer targetDate='2025-03-15T09:00:00' />
			<Navbar />
			<Banner />
			<VideoWithDescription />
			{/* <FreeConference /> */}
			<EventConference/>
			<Hero />
			<VideoMeeting/>
			<DataTable data={tableData} />
			<Footer />
		</>
	)
}

export default Home
