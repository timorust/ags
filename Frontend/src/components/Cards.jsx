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
      <figure className='overflow-hidden w-full h-64 sm:h-56 md:h-64 lg:h-72'>
        <a href={item.url} target="_blank" rel="noopener noreferrer">
          <img
            src={item.image}
            alt='Shoes'
            className='w-full h-full object-cover rounded-t-lg'
          />
        </a>
      </figure>
      <div className='card-body'>
        <h2 className='card-title truncate text-lg sm:text-xl' title={t(item.name)}>
          {t(item.name)}
          {truncateText(t(item.name), 30)}
          {/* <div className='badge badge-secondary text-sm'>{item.category}</div> */}
        </h2>
        <p className='truncate text-sm sm:text-base' title={item.title}>
          {truncateText(item.title, 50)}
        </p>
        <div className='card-actions justify-between mt-4'>

          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className='cursor-pointer px-2 py-2 rounded-full border-[2px] hover:bg-blue-500 hover:text-white duration-200'
          >
            {t('Visit Link')}
          </a>
          {/* <div className='badge badge-outline text-sm sm:text-base'>{item.price}</div> */}

          {item.category === 'Free' && (
            <div
            
              className='rounded-full border-[2px] bg-green-500 text-white px-3 py-2 rounded-md hover:bg-green-700 duration-300 cursor-pointer'
              onClick={handleClick}
            >
              Register
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