import React from 'react';
import { useTranslation } from 'react-i18next'


export default function Hero() {

  const { t } = useTranslation()
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-6 flex flex-col md:flex-row my-10'>
        <div className="hero h-96 md:h-[500px] rounded-box overflow-hidden" style={{ backgroundImage: `url("https://www.akupunktur-noll.de/wp-content/uploads/2016/08/short-sightedness-myopia-is-considered-by-specialists-to-be-a-cause-of-glaucoma-en.png")` }}>
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-secondary-content">
            <div className="max-w-lg">
              <h1 className="mb-5 sm:mb-7 text-4xl sm:text-5xl font-bold dark:text-black">
              <span className="text-green-300">{t('The Azerbaijan Glaucoma Society')}</span>
              </h1>
              <p className="mb-5 sm:mb-7 sm:text-lg dark:text-black">
              {t('Join us for an insightful conference on the latest advancements in glaucoma research and treatment. Together, let`s make strides in eye health.')}
              </p>

              {/* <button className="btn btn-warning sm:btn-wide">Get Started</button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}