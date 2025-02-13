import { useState } from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { useTranslation } from 'react-i18next';

const StripeButton = () => {
	const { t } = useTranslation();
	const [product] = useState({
		name: 'Congress from AGS',
		price: 100,
		productBy: 'AGS',
	})

	const makePayment = token => {
		fetch(`https://www.ags-az.com/payment`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				token,
				product,
			}),
		})
			.then(response => response.json())
			.then(() => {
				alert('Payment successful!')
			})
			.catch(error => {
				console.error('Payment Error:', error)
				alert('Payment failed.')
			})
	}

	return (
		<StripeCheckout
			stripeKey='pk_test_51PMHJLD2fhn4jTSPIzW6eQmeVQHQc6s4S0DH2hCXiKkoV6Q0YZjOCAdSP8iaBPhQR31kZlCUjLjJ4Q7rRPigOZwS00bqewuKwX'
			token={makePayment}
			name='By Congress'
			amount={product.price * 100}
		>
			<div className='rounded-full border-[2px] bg-pink-500 text-white px-3 py-2 rounded-md hover:bg-pink-700 duration-300 cursor-pointer'>
			{t('Buy now')}${product.price}
			</div>
		</StripeCheckout>
	)
}

export default StripeButton
