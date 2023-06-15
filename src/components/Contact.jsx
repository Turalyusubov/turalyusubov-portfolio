import React, { useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';

export default function Contact() {

    const notify = () => toast("Your message was sent!");

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('portfolio-contact', 'template_ep5y1me', form.current, 'FVna1RqpJ5TcbAB4v')
            .then((result) => {
                console.log(result.text);
                console.log('message sent')
                notify()
                e.target.reset()
            }, (error) => {
                console.log(error.text);
            });
    };

    console.log(form.value)

    return (
        <div className='bg-dark-green text-stone-100 relative grid md:grid-cols-2 justify-center items-center py-20 h-full w-full px-6 md:px-32'>
            <div className="w-4/5">
                <h2 className='font-bold mb-8 text-4xl'>Contact <span className='text-light-green drop-shadow-light'>Me!</span></h2>
                <p>Let's connect! Have a project idea or want to say hello? Reach out using the contact form or connect on social media. Let's bring your ideas to life!</p>
            </div>
            <div className="w-full">
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                />
                <form
                    ref={form}
                    onSubmit={sendEmail}
                    className='flex flex-col drop-shadow-light'
                >
                    <label>Name</label>
                    <input
                        type="text"
                        name="user_name"
                        className='border-2 mb-6 rounded text-light-green p-3 border-light-green bg-transparent'
                        required
                    />
                    <label>Email</label>
                    <input
                        type="email"
                        name="user_email"
                        className='border-2 mb-6 rounded text-light-green p-3 border-light-green bg-transparent'
                        required
                    />
                    <label>Message</label>
                    <textarea
                        name="message"
                        className='border-2 mb-6 rounded text-light-green p-3 border-light-green bg-transparent'
                        required
                    ></textarea>
                    <input
                        type="submit"
                        value="Send"
                        className='border-2 mb-6 rounded text-dark-green font-bold p-3 border-light-green bg-light-green hover:bg-bright-green hover:drop-shadow-bright duration-300 cursor-pointer'
                    />
                </form>
            </div>
        </div>
    )
}


