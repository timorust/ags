import Home from './home/Home'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { useAuth } from './context/AuthProvider'
import './i18n'
import Meetings from './meetings/Meetings'
import Signup from './components/Signup'
// import SendEmail from './components/Contact'
import About from './components/About'
import RegisterLecture from './components/RegisterForLecture'
import DataTable from './components/DataTable'
import VideoMeeting from './components/VideoMeeting'

function App() {
	const [authUser, setAuthUser] = useAuth()
	return (
		<>
			<div className='dark:bg-slate-900 dark:text-white'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/list' element={<DataTable />} />
					<Route path='/media' element={<VideoMeeting />} />
					<Route
						path="/signup"
						element={
							authUser ? (
								<Navigate to="/registration" />
							) : (
								<Signup onSignupSuccess={() => setAuthUser(true)} />
							)
						}
					/>
					<Route
						path='/registration'
						element={<RegisterLecture />}
					/>
					<Route path='/meeting' element={<Meetings />} />
					{/* <Route path='/contact' element={<SendEmail />} /> */}
					<Route path='/about' element={<About />} />
				</Routes>
				<Toaster />
			</div>
		</>
	)
}

export default App
