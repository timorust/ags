import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

const Cards = ({ item }) => {

  const { t } = useTranslation();
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/registration')
  }

  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };

  return (
    <div className='dark:bg-slate-900 dark:text-white dark:border card bg-base-100 w-full shadow-xl transform transition-transform duration-700 ease-out hover:scale-105 rounded-lg'>
      {/* התמונה בתוך הכרטיס */}
      <figure className='overflow-hidden w-full h-64 sm:h-56 md:h-64 lg:h-72'>
        <a href={item.url} target="_blank" rel="noopener noreferrer">
          <img
            src={item.image}
            alt='Shoes'
            className='w-full h-full object-cover rounded-t-lg'
          />
        </a>
      </figure>
  
      {/* גוף הכרטיס */}
      <div className='card-body'>
        {/* שם הפריט (item.name) */}
        <h6 
          className="card-title text-lg sm:text-xl whitespace-normal break-words max-w-full overflow-hidden text-ellipsis" // הגדרות לתמיכה בטקסט ארוך
          title={t(item.name)} // תצוגת הטקסט המלאה ב-tooltip
        >
          {truncateText(t(item.name), 30)} {/* קיצוץ אם הטקסט מאוד ארוך */}
        </h6>
  
        {/* תיאור הפריט (item.title) */}
        <p 
          className="text-sm sm:text-base whitespace-normal break-words max-w-full overflow-hidden text-ellipsis" // הגדרות לתמיכה בטקסט ארוך
          title={item.title} // תצוגת הטקסט המלאה ב-tooltip
        >
          {truncateText(item.title, 50)} {/* קיצוץ אם הטקסט מאוד ארוך */}
        </p>
  
        {/* פעולות הכרטיס */}
        <div className='card-actions justify-between mt-4'>
          {/* כפתור קישור */}
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className='rounded-full border-[2px] bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-700 duration-300 cursor-pointer'
          >
            {t('Visit Link')}
          </a>
  
          {/* כפתור הרשמה אם הקטגוריה היא "Free" */}
          {item.category === 'Free' && (
            <div
              className='rounded-full border-[2px] bg-green-500 text-white px-3 py-2 rounded-md hover:bg-green-700 duration-300 cursor-pointer'
              onClick={handleClick}
            >
              {t('Register')}
            </div>
          )}
        </div>
      </div>
    </div>
  )
  
}

Cards.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  }),
}

export default Cards