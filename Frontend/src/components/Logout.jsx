import { useAuth } from '../context/AuthProvider'
import toast from 'react-hot-toast'
import { useTranslation } from 'react-i18next'

function Logout() {
	const { t } = useTranslation()
	const [authUser, setAuthUser] = useAuth()
	const handleLogout = () => {
		try {
			setAuthUser({
				...authUser,
				user: null,
			})
			localStorage.removeItem('Users')
			toast.success('Logout successfully')

			setTimeout(() => {
				window.location.reload()
			}, 3000)
		} catch (error) {
			toast.error('Error: ' + error)
			setTimeout(() => { }, 2000)
		}
	}
	return (
		<div>
			<button
				className='px-3 py-2 bg-pink-500 text-gray-500 
dark:text-white font-light rounded-md cursor-pointer'
				onClick={handleLogout}
			>
				{t('Logout')}
			</button>
		</div>
	)
}

export default Logout
