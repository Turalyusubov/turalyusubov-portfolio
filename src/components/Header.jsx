import React from 'react'
import { AiOutlineInstagram } from 'react-icons/ai'
import { FiGithub } from 'react-icons/fi'
import { FaLinkedinIn } from 'react-icons/fa'
import Typewriter from "typewriter-effect";


export default function Header() {
    return (
        <div className='bg-dark-green relative flex flex-col md:flex-row justify-center items-center py-20 h-screen w-full px-6 md:px-32'>
            <div className="header-left text-center">
                <h1 className='text-stone-100 text-4xl md:text-5xl font-bold'>
                    <Typewriter

                        onInit={(typewriter) => {
                            typewriter
                                .typeString("Hi, I'm Tural Yusubov")
                                .start();
                        }}
                    />
                </h1>
                <h2 className='text-light-green my-4 md:my-6 font-bold text-2xl md:text-3xl drop-shadow-light'>Frontend Developer</h2>
                <p className='text-stone-100 mb-10'>I'm a dedicated frontend developer and I love creating visually stunning and user-friendly websites that make an impact. Let's collaborate and bring ideas to life!</p>
                <div className="btns w-full justify-center flex gap-4 md:gap-8">
                    <button className='border-2 rounded-md w-full md:w-max bg-light-green text-dark-green drop-shadow-light font-bold md:px-8 py-2 border-light-green hover:bg-bright-green hover:drop-shadow-bright duration-300'>Hire Me</button>
                    <button className='border-2 rounded-md w-full md:w-max bg-transparent text-light-green drop-shadow-light font-bold md:px-8 py-2 border-light-green hover:border-bright-green hover:text-bright-green hover:drop-shadow-bright duration-300'>Let's Talk</button>
                </div>
                <div className="flex justify-center">
                    <div className="social-media absolute justify-center bottom-10 md:right-10 flex md:flex-col gap-4 mt-full drop-shadow-light">
                        <a className='rounded-full text-light-green border-[3px] border-light-green text-2xl p-3 hover:text-dark-green hover:bg-bright-green hover:drop-shadow-bright hover:border-bright-green duration-500' href=""><FiGithub /></a>
                        <a className='rounded-full text-light-green border-[3px] border-light-green text-2xl p-3 hover:text-dark-green hover:bg-bright-green hover:drop-shadow-bright hover:border-bright-green duration-500' href=""><FaLinkedinIn /></a>
                        <a className='rounded-full text-light-green border-[3px] border-light-green text-2xl p-3 hover:text-dark-green hover:bg-bright-green hover:drop-shadow-bright hover:border-bright-green duration-500' href=""><AiOutlineInstagram /></a>
                    </div>
                </div>
            </div>
            {/* <div className="header-right w-full h-full flex justify-center items-center">
                <img className='w-4/5 rounded-t-full' src={Profile} alt="profile" />
            </div> */}
        </div>
    )
}
