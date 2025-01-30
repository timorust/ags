import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

const CountdownTimerAlert = ({ targetDate }) => {
    const { t } = useTranslation()

    const calculateTimeLeft = () => {
        const difference = new Date(targetDate) - new Date()
        let timeLeft = {}

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            }
        } else {
            timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 }
        }

        return timeLeft
    }

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())
    const [showModal, setShowModal] = useState(true)

    useEffect(() => {
        const timer = setInterval(() => {
            const newTimeLeft = calculateTimeLeft()
            setTimeLeft(newTimeLeft)

            // Show modal when time reaches 00:00:00
            if (
                newTimeLeft.days === 0 &&
                newTimeLeft.hours === 0 &&
                newTimeLeft.minutes === 0 &&
                newTimeLeft.seconds === 0
            ) {
                setShowModal(true)
            }
        }, 1000)

        return () => clearInterval(timer)
    }, [targetDate])

    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 dark:text-white mt-10 pt-6'>
                <h2 className='text-2xl font-bold mt-4 mb-4 text-center text-gray-800 dark:text-white'>
                    <span className='text-blue-500'>{t('AGC-2025 WILL START IN')}</span>
                    <br />
                    <span className="text-md text-pink-500 dark:text-pink-400 font-medium">
                        15|03|2025
                        <span className="ml-2 text-pink-500 dark:text-pink-400">  09:00</span>
                    </span>
                </h2>
                <div className='flex justify-center space-x-8'>
                    {Object.keys(timeLeft).map(interval => (
                        <div key={interval} className='text-center'>
                            <span className='text-5xl font-bold text-green-500'>
                                {timeLeft[interval] || 0}
                            </span>
                            <div className='text-lg capitalize text-gray-500 dark:text-gray-300 font-light'>
                                {t(interval)}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* מודאל של daisyUI */}
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="modal-box p-6 bg-white dark:bg-gray-900 bg-opacity-90 rounded-lg shadow-none border-none text-center">
                        <h2 className="text-2xl font-bold text-green-600">🎉 CONGRATULATIONS! 🎉</h2>
                        <p className="text-lg font-medium text-gray-700 dark:text-gray-300 mt-4">
                            CONGRESS START NOW!
                        </p>
                        <button
                            onClick={() => setShowModal(false)}
                            className="btn btn-outline mt-6"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

        </>
    )
}

// PropTypes validation
CountdownTimerAlert.propTypes = {
    targetDate: PropTypes.string.isRequired,
}

export default CountdownTimerAlert
