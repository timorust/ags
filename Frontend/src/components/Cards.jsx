import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Cards = ({ item }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  // פונקציה לחיתוך טקסטים ארוכים
  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };

  const handleClick = () => {
    navigate('/registration');
  };

  return (
    <div className='dark:bg-slate-900 dark:text-white dark:border card bg-base-100 w-full sm:w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/2 2xl:w-1/3 shadow-xl transform transition-transform duration-700 ease-out hover:scale-105 rounded-lg m-2'>
      {/* עיצוב תמונה רספונסיבי */}
      <figure className='overflow-hidden w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-96 2xl:h-128'>
        <img
          src={item.image}
          alt={t(item.name)}
          className='w-full h-full object-cover rounded-t-lg'
        />
      </figure>
      <div className='card-body p-4'>
        <h2 className='card-title truncate text-lg sm:text-xl' title={t(item.name)}>
          {/* חיתוך כותרת ארוכה */}
          {truncateText(t(item.name), 30)}
          <div className='badge badge-secondary text-sm'>{item.category}</div>
        </h2>
        <p className='truncate text-sm sm:text-base' title={item.title}>
          {/* חיתוך תיאור ארוך */}
          {truncateText(item.title, 50)}
        </p>
        <div className='card-actions justify-between mt-4'>
          <div className='badge badge-outline text-sm sm:text-base'>{item.price}</div>
          <div
            className='cursor-pointer px-3 py-2 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200 text-sm sm:text-base'
            onClick={handleClick}
          >
            {/* כפתור רכישה */}
            Buy Now
          </div>
        </div>
      </div>
    </div>
  );
};

Cards.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  }),
};

export default Cards;
