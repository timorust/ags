import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Navbar from './Navbar';
import Footer from './Footer';
import CountdownTimer from './CountdownTimer';

function SendEmail() {
    const form = useRef();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSent, setIsSent] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = e => {
        e.preventDefault();

        const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
        const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
        const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

        emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
            () => {
                setIsSent(true);
                setErrorMessage('');
            },
            error => {
                console.error('Failed to send email:', error);
                setErrorMessage('Failed to send email. Please try again.');
            }
        );
    };

    return (
        <>
            <Navbar />
            <CountdownTimer targetDate="2025-03-15T09:00:00" />
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-6">
                <div className="mt-28 items-center justify-center text-center">
                    <h1 className="text-2xl md:text-4xl">
                        Join Our Event,{' '}
                        <span className="text-yellow-500">We Can`t Wait to See You!</span>
                    </h1>
                    <p className="mt-12">
                        Fill out the form below to send us a message and confirm your
                        interest in joining our event. We`ll get back to you shortly!
                    </p>
                </div>

                {isSent ? (
                    <div className="mt-12 text-center">
                        <h2 className="text-2xl text-green-500">Thank you for your message!</h2>
                        <p>We have received your message and will contact you soon.</p>
                    </div>
                ) : (
                    <form
                        ref={form}
                        className="mt-12 max-w-lg mx-auto"
                        onSubmit={handleSubmit}
                    >
                        <div className="mb-6">
                            <label htmlFor="name" className="block text-left text-gray-700">
                                Your Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={name}
                                onChange={e => setName(e.target.value)}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                                placeholder="Enter your name"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="email" className="block text-left text-gray-700">
                                Your Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="message" className="block text-left text-gray-700">
                                Message
                            </label>
                            <textarea
                                name="message"
                                value={message}
                                onChange={e => setMessage(e.target.value)}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                                placeholder="Type your message here"
                                rows="5"
                                required
                            ></textarea>
                        </div>
                        {errorMessage && (
                            <p className="text-red-500 text-center mb-4">{errorMessage}</p>
                        )}
                        <button
                            type="submit"
                            className="w-full bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700 duration-300"
                        >
                            Send Message
                        </button>
                    </form>
                )}
            </div>
            <Footer />
        </>
    );
}

export default SendEmail;
