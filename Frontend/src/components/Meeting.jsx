// import { Link } from 'react-router-dom';
import Cards from './Cards';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

function Meeting() {
  const { t } = useTranslation();
  const [conference, setConference] = useState([]);

  useEffect(() => {
    const getConference = async () => {
      try {
        const res = await axios.get('https://www.ags-az.com/conference');
        console.log(res.data);
        setConference(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getConference();
  }, []);

  return (
    <div className="max-w-screen-2xl container mx-auto px-6 md:px-20">
      {/* Header Section */}
      <div className="text-center mt-16">
        <h1 className="text-2xl md:text-4xl">
          <span className="text-yellow-500">{t('WELCOME TO AGC-2025')}</span>
        </h1>
        {/* Featured Card Section */}
        <div className="flex justify-center mt-20 gap-6 flex-wrap">
          <div className="card w-full max-w-md bg-base-100 shadow-xl p-6 dark:bg-slate-900 dark:text-white">
            <figure className="flex justify-center">
              <img
                src="https://media.licdn.com/dms/image/v2/D5603AQFcR0SmWJ_oQw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1719331799359?e=1742428800&v=beta&t=U0um6HtEHcwHz_thL7tN0ynKEPOeQQ5tW6HajXlnXz0"
                alt="Dr. Jamil Hasanov"
                className="w-32 sm:w-40 md:w-48 lg:w-56 rounded-full"
              />
            </figure>
            <div className="card-body text-justify">
              <h2 className="card-title">{t('Dr. Jamil Hasanov PhD')}</h2>
              <p>{t('Zarifa Aliyeva National Eye Centre')}</p>
              <p className="text-gray-500 mt-2">{t('Chairman')}</p>
              <div className="card-actions justify-center mt-4">
              </div>
            </div>
          </div>

          {/* כרטיס שני */}
          <div className="card w-full max-w-md bg-base-100 shadow-xl p-6 dark:bg-slate-900 dark:text-white">
            <figure className="flex justify-center">
              <img
                src="/avatar_2.png"
                alt="Dr. Sona IbrahImova"
                className="w-32 sm:w-40 md:w-48 lg:w-56 rounded-full"
              />
            </figure>
            <div className="card-body text-justify">
              <h2 className="card-title">{t('Dr. Sona IbrahImova PhD')}</h2>
              <p>{t('Zarifa Aliyeva National Eye Centre')}</p>
              <p className="text-gray-500 mt-2">{t('Vice Chairman')}</p>
              <div className="card-actions justify-center mt-4">


              </div>
            </div>
          </div>
        </div>
        <p className="mt-6 text-lg md:text-xl text-justify leading-relaxed">{t('meetingDescription')}</p>
      </div>



      <div className="card-actions justify-end w-full flex justify-center mt-10">
        <button
          className="text-green-500 hover:text-green-700 active:text-green-800 transition duration-200 flex items-center gap-2"
          onClick={() => window.location.href = 'mailto:glaucomaaz@gmail.az'}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path d="M1.5 4.5A3 3 0 014.5 1.5h15a3 3 0 013 3v15a3 3 0 01-3 3h-15a3 3 0 01-3-3v-15zM4.062 3A1.5 1.5 0 003 4.5v15A1.5 1.5 0 004.5 21h15a1.5 1.5 0 001.5-1.5v-15A1.5 1.5 0 0019.5 3H4.062zM12 12.243l7.5-5.25v10.5h-15v-10.5l7.5 5.25zM5.685 6h12.63L12 11.757 5.685 6z" />
          </svg>
          <span className="text-sm">Send Email</span>
        </button>
      </div>


      {/* Conference Cards Section */}
      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {conference.map(item => (
          <div className="flex justify-center" key={item.id}>
            <Cards item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Meeting;
