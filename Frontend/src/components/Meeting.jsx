import { Link } from 'react-router-dom';
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
        const res = await axios.get('https://ags-az.onrender.com/conference');
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
      <div className="mt-28 text-center">
        <h1 className="text-2xl md:text-4xl">
          {t('WELCOME TO AGC-2025')}<span className="text-yellow-500"></span>
        </h1>
        <p className="mt-6 text-lg md:text-xl">{t('meetingDescription')}</p>
        <Link to="/">
          <button className="mt-6 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700 transition duration-300">
            {t('Back')}
          </button>
        </Link>
      </div>

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
    <div className="card-body text-center">
      <h2 className="card-title">Dr. Jamil Hasanov PhD</h2>
      <p>Zarifa Aliyeva National Eye Centre</p>
      <div className="card-actions justify-center mt-4">
        <button
          className="text-cyan-400 hover:text-cyan-600 active:text-cyan-700 flex items-center gap-2 transition duration-200"
          onClick={() => (window.location.href = "mailto:glaucomaaz@gmail.az")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          Send Email
        </button>
      </div>
    </div>
  </div>
  <div className="card w-full max-w-md bg-base-100 shadow-xl p-6 dark:bg-slate-900 dark:text-white">
    <figure className="flex justify-center">
      <img
        src="https://media.licdn.com/dms/image/v2/D5603AQFcR0SmWJ_oQw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1719331799359?e=1742428800&v=beta&t=U0um6HtEHcwHz_thL7tN0ynKEPOeQQ5tW6HajXlnXz0"
        alt="Dr. Jamil Hasanov"
        className="w-32 sm:w-40 md:w-48 lg:w-56 rounded-full"
      />
    </figure>
    <div className="card-body text-center">
      <h2 className="card-title">Dr. Jamil Hasanov PhD</h2>
      <p>Zarifa Aliyeva National Eye Centre</p>
      <div className="card-actions justify-center mt-4">
        <button
          className="text-cyan-400 hover:text-cyan-600 active:text-cyan-700 flex items-center gap-2 transition duration-200"
          onClick={() => (window.location.href = "mailto:glaucomaaz@gmail.az")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          Send Email
        </button>
      </div>
    </div>
  </div>
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
