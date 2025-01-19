import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
// Import Swiper components and styles //
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';

// Install Swiper modules //
SwiperCore.use([Navigation, Pagination, Autoplay]);

function VideoCurusel() {
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
      title: t('GLAUCOMATOLOGISTS'),
      description: t('Beynəlxalq “Qlaukoma həftəsi'),
      youtubeId: 'oOz30gbA6x4',
    },
    {
      id: 4,
      title: t('AADI'),
      description: t('Innovations in Eye Care'),
      youtubeId: '5rXkw20_ogA',
    },
    {
      id: 5,
      title: t('LIVE SURGERY'),
      description: t('5th CONFERENCE of AZERBAIJAN GLAUCOMATOLOGISTS. AADI.'),
      youtubeId: '1gecYxpfcs8',
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

      {/* Swiper Slider Section */}
      <div className="mt-12">
        {/* Swiper Component with settings for modern design */}
        <Swiper
          spaceBetween={20} // Spacing between slides
          slidesPerView={1} // Default slides per view
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }} // Responsive breakpoints //
          navigation // Enables navigation arrows
          pagination={{ clickable: true }} // Pagination bullets
          autoplay={{ delay: 3000 }} // Auto slide every 3 seconds
          className="swiper-container"
        >
          {videos.map((video) => (
            <SwiperSlide key={video.id}>
              {/* Individual video card */}
              <div className="card w-full max-w-md bg-base-100 shadow-xl p-6 dark:bg-slate-900 dark:text-white">
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default VideoCurusel;
