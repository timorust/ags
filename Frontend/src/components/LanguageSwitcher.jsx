import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const LanguageSwitcher = () => {
	const { i18n } = useTranslation()
	const [language, setLanguage] = useState(i18n.language)

	const toggleLanguage = () => {
		const newLanguage = language === 'en' ? 'az' : 'en'
		i18n.changeLanguage(newLanguage)
		setLanguage(newLanguage)
	}

	return (
		<div className='language-switcher'>
			<button onClick={toggleLanguage} className='flex items-center'>
				<span>{language === 'en' ? 'EN' : 'AZ'}</span>
			</button>
		</div>
	)
}

export default LanguageSwitcher
