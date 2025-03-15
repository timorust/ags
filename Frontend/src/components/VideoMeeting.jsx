import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from './Navbar';
// import CountdownTimer from './CountdownTimer';
import Footer from './Footer';

const truncateText = (text, maxLength) => {
  return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
};

function VideoMeeting() {
  const { t } = useTranslation();
  const [videos, setVideos] = useState([
    {
      id: 1,
      title: t('Introduction to AGC 2025'),
      description: t('Azərbaycan Qlaukomatoloqlarının'),
      youtubeId: '4E4RDUNbznM', 
    },
    {
      id: 2,
      title: t('A video about the historical figures and luminaries of ophthalmology in our country was presented at the 5th Conference of Azerbaijani Glaucomatologists.'),
      description: t('Dr. Jamil Hasanov’s Vision'),
      youtubeId: 'Ej2nGs2Wcno',
    },
    {
      id: 3,
      title: t('GLAUCOMATOLOGISTS'),
      description: t('Beynəlxalq “Qlaukoma həftəsi'),
      youtubeId: 'oOz30gbA6x4',
    },
    {
      id: 4,
      title: t('LIVE SURGERY'),
      description: t('5th CONFERENCE of AZERBAIJAN GLAUCOMATOLOGISTS. AADI'),
      youtubeId: '1gecYxpfcs8',
    },
  ]);

  return (
    <>
      <Navbar />
      {/* <CountdownTimer targetDate="2025-03-15T09:00:00" /> */}
      <div className="max-w-screen-2xl container mx-auto px-6 md:px-20">
        {/* Header Section */}
        <div className="mt-16 text-center">
          <h1 className="text-2xl md:text-4xl">
            <span className="text-yellow-500">{t('MEDIA GALLERY')}</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl"></p>
        </div>

        {/* Video Cards Section */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {videos.map(video => (
            <div className="card w-full max-w-md bg-base-100 shadow-xl p-6 dark:bg-slate-900 dark:text-white" key={video.id}>
              <div className="card-body text-center">
                <h2 className="card-title">{truncateText(video.title, 50)}</h2>
                <p>{truncateText(video.description, 80)}</p>
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
      <Footer />
    </>
  );
}

export default VideoMeeting;
