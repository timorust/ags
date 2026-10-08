import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Meeting from '../components/Meeting'
import Footer from '../components/Footer'

const statusStyles = {
        checking:
                'border-yellow-300 bg-yellow-50 text-yellow-800 dark:border-yellow-700 dark:bg-slate-900 dark:text-yellow-300',
        paid:
                'border-green-300 bg-green-50 text-green-800 dark:border-green-700 dark:bg-slate-900 dark:text-green-300',
        unpaid:
                'border-yellow-300 bg-yellow-50 text-yellow-800 dark:border-yellow-700 dark:bg-slate-900 dark:text-yellow-300',
        cancelled:
                'border-yellow-300 bg-yellow-50 text-yellow-800 dark:border-yellow-700 dark:bg-slate-900 dark:text-yellow-300',
        error:
                'border-red-300 bg-red-50 text-red-800 dark:border-red-700 dark:bg-slate-900 dark:text-red-300',
}

const statusContent = {
        checking: {
                title: 'Checking your payment',
                message: 'Please wait while we verify your payment.',
        },
        paid: {
                title: 'Payment successful',
                message: 'Your payment has been verified. Thank you!',
        },
        unpaid: {
                title: 'Payment not completed',
                message: 'This checkout session has not been paid.',
        },
        cancelled: {
                title: 'Checkout cancelled',
                message: 'You cancelled this checkout before completing payment.',
        },
        error: {
                title: 'Unable to verify payment',
                message: 'Please refresh the page to check again.',
        },
}

function Meetings() {
        const [searchParams] = useSearchParams()
        const sessionId = searchParams.get('session_id')
        const cancelled = searchParams.get('checkout') === 'cancelled'
        const [paymentStatus, setPaymentStatus] = useState('')

        useEffect(() => {
                if (!sessionId) {
                        setPaymentStatus('')
                        return
                }

                const controller = new AbortController()
                setPaymentStatus('checking')

                const checkPayment = async () => {
                        try {
                                const response = await fetch(
                                        `/payment/status?sessionId=${encodeURIComponent(sessionId)}`,
                                        {
                                                signal: controller.signal,
                                                cache: 'no-store',
                                        }
                                )

                                const data = await response.json()

                                if (!response.ok) {
                                        throw new Error('Unable to verify payment')
                                }

                                if (!controller.signal.aborted) {
                                        setPaymentStatus(
                                                data.paid === true ? 'paid' : 'unpaid'
                                        )
                                }
                        } catch (error) {
                                if (!controller.signal.aborted) {
                                        console.error(
                                                'Payment verification failed:',
                                                error
                                        )
                                        setPaymentStatus('error')
                                }
                        }
                }

                checkPayment()

                return () => controller.abort()
        }, [sessionId])

        const visibleStatus = sessionId
                ? paymentStatus
                : cancelled
                        ? 'cancelled'
                        : ''

        const content = statusContent[visibleStatus]

        return (
                <>
                        <Navbar />

                        <main className='min-h-screen'>
                                {content && (
                                        <div className='max-w-screen-2xl container mx-auto px-6 md:px-20 pt-28 md:pt-32'>
                                                <div
                                                        role='status'
                                                        aria-live='polite'
                                                        aria-atomic='true'
                                                        className={`flex items-start gap-4 rounded-2xl border p-5 md:p-6 shadow-lg ${statusStyles[visibleStatus]}`}
                                                >
                                                        <span
                                                                aria-hidden='true'
                                                                className='flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/70 dark:bg-slate-800'
                                                        >
                                                                {visibleStatus === 'checking' ? (
                                                                        <span className='h-6 w-6 animate-spin rounded-full border-2 border-current border-t-transparent' />
                                                                ) : visibleStatus === 'paid' ? (
                                                                        <svg
                                                                                viewBox='0 0 24 24'
                                                                                fill='none'
                                                                                stroke='currentColor'
                                                                                strokeWidth='2'
                                                                                strokeLinecap='round'
                                                                                strokeLinejoin='round'
                                                                                className='h-7 w-7'
                                                                        >
                                                                                <path d='M5 12l4 4L19 6' />
                                                                        </svg>
                                                                ) : (
                                                                        <svg
                                                                                viewBox='0 0 24 24'
                                                                                fill='none'
                                                                                stroke='currentColor'
                                                                                strokeWidth='2'
                                                                                strokeLinecap='round'
                                                                                className='h-7 w-7'
                                                                        >
                                                                                <circle cx='12' cy='12' r='9' />
                                                                                <path d='M12 8v5' />
                                                                                <path d='M12 16h.01' />
                                                                        </svg>
                                                                )}
                                                        </span>

                                                        <div className='min-w-0'>
                                                                <h2 className='text-lg md:text-xl font-semibold'>
                                                                        {content.title}
                                                                </h2>
                                                                <p className='mt-1 text-sm md:text-base leading-relaxed'>
                                                                        {content.message}
                                                                </p>
                                                        </div>
                                                </div>
                                        </div>
                                )}

                                <Meeting />
                        </main>

                        <Footer />
                </>
        )
}

export default Meetings