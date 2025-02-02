import Slider from 'react-slick';
import { useState } from 'react';
import Cards from './Cards';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useTranslation } from 'react-i18next'

function EventConference() {

  const { t } = useTranslation()
  const [conference] = useState([
    {
      id: 1,
      image: '/meeting3.png', // Replace with your local or hosted image URLs
      name: 'The Azerbaijan Glaucoma Society (AGS)',
      category: 'Free',
      title: 'Since glaucoma is a serious, currently incurable disease that leads to blindness, special attention is paid to this problem. For 6 years now, as a tradition, the scientific and practical conference of Azerbaijani glaucomatologists has been held in mid-March. This conference brings together local and foreign specialists involved in glaucoma every year and provides an opportunity to discuss innovations, clinical and scientific experiences in the field. The knowledge and experience gained in this conference are used by our local ophthalmologists, both in Baku and in all regions of our country, creating broad opportunities for the prevention, early diagnosis and appropriate treatment of glaucoma among the population. This year, adhering to the tradition, we invite all our colleagues who are interested in glaucoma to participate in the VI conference of Azerbaijani glaucomatologists on March 15.',
      price: 0,
      url: 'https://eye.gov.az/?smode=content&item=28_aprel_akad_Zerife_xanim_konfrans_2023',
    },
    {
      id: 2,
      image: 'https://anzgsconference.com/wp-content/uploads/2024/07/rananz.jpg',
      name: 'Australian and New Zealand Glaucoma Society Congress (ANZGS 2025)',
      category: 'active',
      title: 'Second event to explore new opportunities.',
      price: 0,
      url: 'https://anzgsconference.com/',
    },
    {
      id: 3,
      image: 'https://higherlogicdownload.s3.amazonaws.com/AMERICANGLAUCOMASOCIETY/9f15f56c-64ed-4e90-ab3e-9bc3fb0c245e/UploadedImages/AGS-2025-Banner-1200x450_4x.png',
      name: 'American Glaucoma Society Annual Meeting (AGS 2025)',
      category: 'active',
      title: 'Location: Washington, DC, USA',
      price: 99,
      url: 'https://www.americanglaucomasociety.net/meetings-events/annual-meeting',
    },
    {
      id: 4,
      image: 'https://www.sociedadglaucoma.com/wp-content/uploads/2025/01/cartel-seg-2025.jpg',
      name: 'Congress of the Spanish Society of Glaucoma (SEG 2025)',
      category: 'active',
      title: 'Dates: 6 March - 8 March 2025',
      price: 0,
      url: 'https://www.sociedadglaucoma.com/',
    },
    {
      id: 5,
      image: 'https://subspecialtyday.ascrs.org/-/media/all-annual-meetings/am-2024/am2024-images/2024-gd-hero.jpeg?cx=0.75&cy=0.44&cw=767&ch=767&hash=0ED3FEB8D9C021692101BCB147ACFD17',
      name: 'ASCRS Glaucoma Day',
      category: 'active',
      title: 'Apr 25, 2025  Los Angeles, CA',
      price: 0,
      url: 'https://subspecialtyday.ascrs.org/glaucoma-day',
    },
    {
      id: 6,
      image: '/meeting9.jpg',
      name: 'World Glaucoma Congress (WGC 2025)',
      category: 'active',
      title: 'Dates: 25 June - 28 June 2025',
      price: 150,
      url: 'https://worldglaucomacongress.org',
    },
    
  ]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 py-12">
      <div>
        <h1 className="font-semibold text-2xl md:text-3xl pb-4">
          <span className="text-yellow-500">{t('Glaucoma conferences in 2025')}</span>
        </h1>
        {/* <p className="text-gray-600 mb-6">
          Discover upcoming conferences with exciting opportunities to learn and connect.
        </p> */}

        <div className="slider-container">
          {conference.length === 0 ? (
            <p>Loading or no conferences available...</p>
          ) : (
            <Slider {...settings}>
              {conference.map((item) => (
                <div className="px-2" key={item.id}>
                  <div className="flex justify-center">
                    <Cards item={item} />
                  </div>
                </div>
              ))}
            </Slider>
          )}
        </div>
      </div>
    </div>
  );
}

export default EventConference;
