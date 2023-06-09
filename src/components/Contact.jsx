import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('portfolio-contact', 'template_ep5y1me', form.current, 'FVna1RqpJ5TcbAB4v')
            .then((result) => {
                console.log(result.text);
                console.log('message sent')
                e.target.reset()
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className='bg-dark-green text-stone-100 relative flex flex-col justify-center items-center py-20 h-full w-full px-6 md:px-32'>
            <h2 className='font-bold mb-20 text-4xl'>Contact <span className='text-light-green'>Me!</span></h2>
            <div className="w-full">
                <form
                    ref={form}
                    onSubmit={sendEmail}
                    className='flex flex-col'
                >
                    <label>Name</label>
                    <input
                        type="text"
                        name="user_name"
                        className='border-2 mb-6 rounded text-light-green p-3 border-light-green bg-transparent' />
                    <label>Email</label>
                    <input
                        type="email"
                        name="user_email"
                        className='border-2 mb-6 rounded text-light-green p-3 border-light-green bg-transparent'
                    />
                    <label>Message</label>
                    <textarea
                        name="message"
                        className='border-2 mb-6 rounded text-light-green p-3 border-light-green bg-transparent'
                    />
                    <input
                        type="submit"
                        value="Send"
                        className='border-2 mb-6 rounded text-dark-green font-bold p-3 border-light-green bg-light-green'
                    />
                </form>
            </div>
        </div>
    )
}


