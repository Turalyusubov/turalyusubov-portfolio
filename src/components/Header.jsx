import React from 'react'
import { AiOutlineInstagram } from 'react-icons/ai'
import { FiGithub } from 'react-icons/fi'
import { FaLinkedinIn } from 'react-icons/fa'
import Profile from '../assets/profile.png'
import AzFlag from '../assets/az-flag.png'

export default function Header() {
    return (
        <div className='bg-dark-green relative flex flex-col md:flex-row justify-center items-center py-20 h-full md:h-screen w-full px-6 md:px-32'>
            <div className="header-left text-center">
                <h1 className='text-stone-100 text-4xl md:text-5xl font-bold'>Hi, I'm Tural Yusubov</h1>
                <h2 className='text-light-green my-4 md:my-6 font-bold text-2xl md:text-3xl'>Frontend Developer</h2>
                <p className='text-stone-100 mb-10'>I'm a dedicated frontend developer and I love creating visually stunning and user-friendly websites that make an impact. Let's collaborate and bring ideas to life!</p>
                <div className="btns w-full justify-center flex gap-4 md:gap-8">
                    <button className='border-2 rounded-md bg-light-green text-dark-green font-bold md:px-8 py-2 border-light-green'>Hire Me</button>
                    <button className='border-2 rounded-md bg-transparent text-light-green font-bold md:px-8 py-2 border-light-green'>Let's Talk</button>
                </div>
                <div className="social-media absolute bottom-10 flex gap-4 mt-full">
                    <a className='rounded-full text-light-green border-[3px] border-light-green text-2xl p-3' href=""><FiGithub /></a>
                    <a className='rounded-full text-light-green border-[3px] border-light-green text-2xl p-3' href=""><FaLinkedinIn /></a>
                    <a className='rounded-full text-light-green border-[3px] border-light-green text-2xl p-3' href=""><AiOutlineInstagram /></a>
                </div>
            </div>
            {/* <div className="header-right w-full h-full flex justify-center items-center">
                <img className='w-4/5 rounded-t-full' src={Profile} alt="profile" />
            </div> */}
        </div>
    )
}
