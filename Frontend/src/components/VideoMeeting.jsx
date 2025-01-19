import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

function VideoMeeting() {
  const { t } = useTranslation();
  const [videos, setVideos] = useState([
    {
      id: 1,
      title: t('Introduction to AGC 2025'),
      description: t('Azərbaycan Qlaukomatoloqlarının'),
      youtubeId: '4E4RDUNbznM', // Example YouTube video ID
    },
    {
      id: 2,
      title: t('Keynote Speech'),
      description: t('Dr. Jamil Hasanov’s Vision'),
      youtubeId: 'Ej2nGs2Wcno',
    },
    {
      id: 3,
      title: t('Panel Discussion'),
      description: t('Beynəlxalq “Qlaukoma həftəsi'),
      youtubeId: 'oOz30gbA6x4',
    },
    {
      id: 4,
      title: t('Panel Discussion'),
      description: t('Innovations in Eye Care'),
      youtubeId: '5rXkw20_ogA',
    },
  ]);

  return (
    <div className="max-w-screen-2xl container mx-auto px-6 md:px-20">
      {/* Header Section */}
      <div className="mt-28 text-center">
        <h1 className="text-2xl md:text-4xl">
          {t('WELCOME TO AGC-2025')}<span className="text-yellow-500"></span>
        </h1>
        <p className="mt-6 text-lg md:text-xl">{t('meetingDescription')}</p>
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
      </div>

      {/* Video Cards Section */}
      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {videos.map(video => (
          <div className="card w-full max-w-md bg-base-100 shadow-xl p-6 dark:bg-slate-900 dark:text-white" key={video.id}>
            <div className="card-body text-center">
              <h2 className="card-title">{video.title}</h2>
              <p>{video.description}</p>
              <div className="mt-4">
                <iframe
                  width="100%"
                  height="200"
                  src={`https://www.youtube.com/embed/${video.youtubeId}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VideoMeeting;
