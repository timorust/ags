import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
// import en from '../i18n/en/translation.json'
// import az from '../i18n/az/translation.json'
import HttpBackend from "i18next-http-backend"

const savedLanguage = localStorage.getItem('language') || 'en'
i18n
	.use(initReactI18next)
	.use(HttpBackend)
	.init({
		debug: true,
		fallbackLng: savedLanguage,
		lng: savedLanguage,
		interpolation: {
			escapeValue: false,
		},

		backend: {
			loadPath: "https://ags-az.onrender.com/locales/{{lng}}/{{ns}}.json"
		},
	})

export default i18n




