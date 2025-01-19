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
            <p className="text-gray-500 mt-2">Specialized in Glaucoma Surgery</p>
            <p className="text-gray-500 mt-2">Expert in Ocular Oncology</p>
            <div className="card-actions justify-center mt-4">
              <button
                className="text-green-500 hover:text-green-700 active:text-green-800 flex items-center gap-2 transition duration-200"
                onClick={() => (window.location.href = "https://wa.me/+1234567890")} // כאן שמים את מספר הטלפון שלך
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path d="M12.292 10.293a1 1 0 0 0-1.414 0l-2.293 2.293a6.48 6.48 0 0 1-1.86-.768l-.07-.039a5.919 5.919 0 0 1-1.16-.65l-.032-.02a6.446 6.446 0 0 1-.826-1.358l-.02-.033a5.75 5.75 0 0 1-.282-.601l.057-.006a5.75 5.75 0 0 0-.028-5.847l.017-.029a6.516 6.516 0 0 1 2.586-3.062A6.513 6.513 0 0 1 15 2.5a6.5 6.5 0 0 1-4.208 5.058l-.187-.11-.387.644-.183.305-.298-.179a4.678 4.678 0 0 0-.17-.098l-.016-.009-.178.21a5.512 5.512 0 0 0-3.402-.831z" />
                </svg>
                Send WhatsApp Message
              </button>
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
          <div className="card-body text-center">
            <h2 className="card-title">Dr. Sona IbrahImova PhD</h2>
            <p>Zarifa Aliyeva National Eye Centre</p>
            <p className="text-gray-500 mt-2">Specialized in Retinal Diseases</p>
            <p className="text-gray-500 mt-2">Expert in Diabetic Retinopathy</p>
            <div className="card-actions justify-center mt-4">
              <button
                className="text-green-500 hover:text-green-700 active:text-green-800 flex items-center gap-2 transition duration-200"
                onClick={() => (window.location.href = "https://wa.me/+1234567890")} // כאן שמים את מספר הטלפון שלך
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-6 h-6 opacity-70"
                >
                  {/* אייקון ווטסאפ */}
                  <path d="M8 1a7 7 0 0 0-6.469 4.075A5.992 5.992 0 0 0 1 8a7 7 0 1 0 13.938 1.925A6.998 6.998 0 0 0 8 1zM8 14a6 6 0 0 1-5.917-5.25L2 8a4 4 0 1 1 8 0c0 2.21-1.79 4-4 4zm-.926-3.016a1.51 1.51 0 0 1-1.161.115c-.295-.107-.625-.23-.947-.372a.51.51 0 0 0-.624.074l-.646.647a.49.49 0 0 1-.097.07c-.43.298-.933.401-1.405.43-1.028.063-1.844-.588-2.253-1.257a3.15 3.15 0 0 1-.51-.924c-.219-.428-.388-.883-.513-1.348-.234-.712-.476-1.393-.665-2.114-.295-.915-.473-1.897-.473-2.87 0-.98.155-1.951.474-2.867a6.451 6.451 0 0 1 2.014-.01c.391.139.771.319 1.128.518.197.106.378.236.542.375.46.352.862.758 1.16 1.19a4.366 4.366 0 0 1 .797 1.29c.22.658.347 1.36.35 2.075a6.015 6.015 0 0 1-.496 2.475c-.31.694-.775 1.314-1.392 1.885z" />
                </svg>
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
