import PropTypes from 'prop-types'
import StripeCheckout from 'react-stripe-checkout'
import { useTranslation } from 'react-i18next'

const StripeButton = ({ conferenceId, price }) => {
        const { t } = useTranslation()

        const makePayment = async token => {
                try {
                        const response = await fetch('/payment', {
                                method: 'POST',
                                headers: {
                                        'Content-Type': 'application/json',
                                },
                                body: JSON.stringify({
                                        conferenceId,
                                        token,
                                }),
                        })

                        const data = await response.json()

                        if (!response.ok) {
                                throw new Error(data.error || 'Payment failed')
                        }

                        alert('Payment successful!')
                } catch (error) {
                        console.error('Payment Error:', error)
                        alert(`Payment failed: ${error.message}`)
                }
        }

        return (
                <StripeCheckout
                        stripeKey='pk_test_51PMHJLD2fhn4jTSPIzW6eQmeVQHQc6s4S0DH2hCXiKkoV6Q0YZjOCAdSP8iaBPhQR31kZlCUjLjJ4Q7rRPigOZwS00bqewuKwX'
                        token={makePayment}
                        name='AGS Conference'
                        amount={Math.round(price * 100)}
                        currency='USD'
                >
                        <button
                                type='button'
                                className='border-2 bg-pink-500 text-white px-3 py-2 rounded-md hover:bg-pink-700 duration-300 cursor-pointer'
                        >
                                {t('Buy now')} ${price}
                        </button>
                </StripeCheckout>
        )
}

StripeButton.propTypes = {
        conferenceId: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
}

export default StripeButton