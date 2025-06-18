import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div 
          className="hero h-96 md:h-[500px] rounded-box overflow-hidden" 
          style={{ 
            backgroundImage: `url("https://www.akupunktur-noll.de/wp-content/uploads/2016/08/short-sightedness-myopia-is-considered-by-specialists-to-be-a-cause-of-glaucoma-en.png")`,
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
        >
          <div className="hero-overlay bg-opacity-70 bg-black"></div>
          <div className="hero-content text-center text-white p-4 sm:p-6">
            <div className="max-w-lg mx-auto">
              <h1 className="mb-5 sm:mb-7 text-3xl sm:text-4xl font-bold">
                <span className="text-blue-300">{t('Azerbaijan Glaucoma Society')}</span>
              </h1>
              <p className="text-sm sm:text-base text-justify leading-relaxed tracking-normal text-gray-500 dark:text-gray-300 font-light">
                {t('heroText')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
