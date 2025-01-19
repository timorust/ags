import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

const Cards = ({ item }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/registration')
  }

  return (
    <div className='dark:bg-slate-900 dark:text-white dark:border card bg-base-100 w-full shadow-xl transform transition-transform duration-700 ease-out hover:scale-105 rounded-lg'>
      <figure className='overflow-hidden w-full h-64 sm:h-56 md:h-64 lg:h-72'> {/* התאמה לרספונסיביות */}
        <img
          src={item.image}
          alt='Shoes'
          className='w-full h-full object-cover rounded-t-lg'  {/* תמונה מלאה עם חיתוך */}
        />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>
          {item.name}
          <div className='badge badge-secondary'>{item.category}</div>
        </h2>
        <p>{item.title}</p>
        <div className='card-actions justify-between'>
          <div className='badge badge-outline'>{item.price}</div>
          <div
            className='cursor-pointer px-2 py-2 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200'
            onClick={handleClick}
          >
            Buy Now
          </div>
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
