import { useTranslation } from 'react-i18next'

const VideoWithDescription = () => {

	const { t } = useTranslation()
	return (
		<div className='max-w-screen-2xl container mx-auto md:px-20 px-4 mt-20 pt-16 dark:bg-slate-800 dark:text-white'>
			<div className='flex flex-col md:flex-row items-center space-y-12 md:space-y-0 md:space-x-16 mb-5'>
				<div className='flex-1 md:w-1/3 text-left mb-10 mr-10'>
					<div className='aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl'>
						{/* שימוש בכתובת נכונה להטמעה */}
						<iframe
							className="w-full"
							src="https://www.youtube.com/embed/Ej2nGs2Wcno"  // שימו לב לשינוי כאן
							title="YouTube video player"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowfullscreen
							style={{ height: "360px" }}
						></iframe>
					</div>
				</div>

				<div className="flex-1 md:w-1/3 text-justify">
					<h3 className="font-semibold text-2xl md:text-3xl pb-4">
						<span className="text-blue-500">{t('Our call to fight glaucoma')}</span>
					</h3>
					<ul className="mb-5 sm:mb-7 sm:text-lg text-gray-500 dark:text-gray-300 font-light">
						<li>{t('Early Detection and Regular Screenings')}!!!</li>
						<li>{t('Effective Treatment')}!!!</li>
						<li>{t('Research and Innovation !!!')}</li>
						<li>{t('Patient Education !!!')}</li>
						<li>{t('Advocacy and Support !!!')}</li>
						<li>{t('Lifestyle and Risk Management !!!')}</li>
					</ul>
				</div>

			</div>
		</div>
	)
}

export default VideoWithDescription
