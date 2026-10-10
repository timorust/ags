import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import StripeButton from './StripeButton'

const Cards = ({ item }) => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/registration')
  }

  const truncateText = (text, maxLength) => {
    return text.length > maxLength
      ? text.substring(0, maxLength) + '...'
      : text
  }

  return (
    <div className='dark:bg-slate-900 dark:text-white dark:border card bg-base-100 w-full shadow-xl transform transition-transform duration-700 ease-out hover:scale-105 rounded-lg'>
      {/* תמונת הכנס */}
      <figure className='overflow-hidden w-full h-64 sm:h-56 md:h-64 lg:h-72'>
        <a href={item.url} target='_blank' rel='noopener noreferrer'>
          <img
            src={item.image}
            alt={item.name}
            className='w-full h-full object-cover rounded-t-lg'
          />
        </a>
      </figure>

      {/* תוכן הכרטיס */}
      <div className='card-body'>
        <h6
          className='card-title text-lg sm:text-xl whitespace-normal break-words max-w-full overflow-hidden text-ellipsis'
          title={t(item.name)}
        >
          {truncateText(t(item.name), 30)}
        </h6>

        <p
          className='text-sm sm:text-base whitespace-normal break-words max-w-full overflow-hidden text-ellipsis'
          title={item.title}
        >
          {truncateText(item.title, 50)}
        </p>

        {/* פעולות הכרטיס */}
        <div className='card-actions justify-between mt-4'>
          <a
            href={item.url}
            target='_blank'
            rel='noopener noreferrer'
            className='border-2 bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-700 duration-300 cursor-pointer'
          >
            {t('Visit Link')}
          </a>

          {item.category === 'Free' && (
            <button
              type='button'
              className='border-2 bg-green-500 text-white px-3 py-2 rounded-md hover:bg-green-700 duration-300 cursor-pointer'
              onClick={handleClick}
            >
              {t('Register')}
            </button>
          )}

          {item.paymentEnabled === true && (
            <StripeButton
              conferenceId={item._id}
              price={item.price}
            />
          )}
        </div>
      </div>
    </div>
  )
}

Cards.propTypes = {
  item: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    paymentEnabled: PropTypes.bool,
  }).isRequired,
}

export default Cards