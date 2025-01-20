import Home from './home/Home'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { useAuth } from './context/AuthProvider'
import './i18n'
import Meetings from './meetings/Meetings'
import Signup from './components/Signup'
import SendEmail from './components/Contact'
import About from './components/About'
import RegisterLecture from './components/RegisterForLecture'
import ProfileSona from './ProfileSona';

function App() {
	const [authUser, setAuthUser] = useAuth()
	return (
		<>
			<div className='dark:bg-slate-900 dark:text-white'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route
						path='/meeting'
						element={authUser ? <Meetings /> : <Navigate to='/signup' />}
					/>
					<Route path="/profile/sona-ibrahimova" element={<ProfileSona />} />
					<Route path='/signup' element={<Signup />} />
					<Route path='/contact' element={<SendEmail />} />
					<Route path='/about' element={<About />} />
					<Route path='/registration' element={<RegisterLecture />} />
				</Routes>
				<Toaster />
			</div>
		</>
	)
}

export default App
