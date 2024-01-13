import React, { useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';
import { AiOutlineArrowUp } from 'react-icons/ai'
import { SiGmail } from 'react-icons/si'
import { motion } from 'framer-motion'

export default function Contact() {

    const notify = () => toast("Your message was sent!",
        {
            className: 'toast-message'
        });

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

    return (
        <div id='contact' className='bg-dark-green overflow-x-hidden relative'>
            <div className="relative text-stone-100 grid md:grid-cols-2 justify-center items-center py-20 h-full w-full px-6 md:px-32">
                <div
                    className="mb-8 md:mb-0 text-center">
                    <motion.h2
                        viewport={{ once: true }}
                        initial={{ x: -100, opacity: 0, }}
                        whileInView={{ x: 0, opacity: 1, }}
                        transition={{ duration: .5, delay: .2 }}
                        className='group font-bold mb-8 text-4xl md:w-4/5'>Contact <span className='text-light-green drop-shadow-light group-hover:text-bright-greeen group-hover:drop-shadow-bright duration-300'>Me!</span></motion.h2>
                    <motion.p
                        viewport={{ once: true }}
                        initial={{ x: -100, opacity: 0, }}
                        whileInView={{ x: 0, opacity: 1, }}
                        transition={{ duration: .5, delay: .3 }}
                        className='md:w-4/5'>Let's connect! Have a project idea or want to say hello? Reach out using the contact form or connect on social media. Let's bring your ideas to life!</motion.p>

                    {/* <div className="w-full pl-4">
                        <div className="flex group items-center w-full gap-2">
                            <div className="border-light-green border-2 rounded-full w-12 h-12 flex items-center justify-center text-2xl">
                                <SiGmail className='text-light-green drop-shadow-light group-hover:text-bright-greeen group-hover:drop-shadow-bright duration-300' />
                            </div>
                            <span>turall.yusubov@gmail.com</span>
                        </div>
                    </div> */}
                </div>
                <motion.div
                    viewport={{ once: true }}
                    initial={{ x: 100, opacity: 0, }}
                    whileInView={{ x: 0, opacity: 1, }}
                    transition={{ duration: .5, delay: .2 }}
                    className="w-full">
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
                            placeholder='Your Name'
                            required
                        />
                        <label>Email</label>
                        <input
                            type="email"
                            name="user_email"
                            className='border-2 mb-6 rounded text-light-green p-3 border-light-green bg-transparent'
                            placeholder='Your Email'
                            required
                        />
                        <label>Message</label>
                        <textarea
                            name="message"
                            className='border-2 h-[16vh] mb-6 rounded text-light-green p-3 border-light-green bg-transparent'
                            placeholder='Your Message'
                            required
                        ></textarea>
                        <input
                            type="submit"
                            value="Send"
                            className='border-2 mb-6 rounded text-dark-green font-bold p-3 border-light-green bg-light-green hover:bg-bright-green hover:drop-shadow-bright duration-300 cursor-pointer'
                        />
                    </form>
                </motion.div>
            </div>
            <div className="text-center text-stone-400 pb-4">©Tural Yusubov. All rights reserved.</div>
        </div>
    )
}


