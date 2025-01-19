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
          {t('VIDEO GALLERY')}<span className="text-yellow-500"></span>
        </h1>
        <p className="mt-6 text-lg md:text-xl"></p>
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
