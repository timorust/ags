import { useState } from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

const StripeButton = ({ conferenceId, price }) => {
        const { t } = useTranslation()
        const [isLoading, setIsLoading] = useState(false)

        const makePayment = async () => {
                if (isLoading) return

                setIsLoading(true)

                try {
                        const response = await fetch('/payment', {
                                method: 'POST',
                                headers: {
                                        'Content-Type': 'application/json',
                                },
                                body: JSON.stringify({
                                        conferenceId,
                                }),
                        })

                        const data = await response.json()

                        if (!response.ok) {
                                throw new Error(
                                        data.error || 'Unable to open checkout'
                                )
                        }

                        const checkoutUrl = new URL(data.url)

                        if (
                                checkoutUrl.protocol !== 'https:' ||
                                checkoutUrl.hostname !== 'checkout.stripe.com'
                        ) {
                                throw new Error('Invalid checkout URL')
                        }

                        window.location.assign(checkoutUrl.href)
                } catch (error) {
                        console.error('Checkout Error:', error)
                        alert(`Checkout failed: ${error.message}`)
                        setIsLoading(false)
                }
        }

        return (
                <button
                        type='button'
                        onClick={makePayment}
                        disabled={isLoading}
                        className='border-2 bg-pink-500 text-white px-3 py-2 rounded-md hover:bg-pink-700 duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-wait'
                >
                        {isLoading
                                ? t('Loading...')
                                : `${t('Buy now')} $${price}`}
                </button>
        )
}

StripeButton.propTypes = {
        conferenceId: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
}

export default StripeButton