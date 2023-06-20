import React from 'react'
import Profile from '../assets/profile.png'
import { AiOutlineDownload } from 'react-icons/ai'

export default function About() {
    return (
        <div className='bg-main-green text-stone-100 relative flex flex-col items-center py-20 h-full w-full px-6 md:px-32'>
            <h2 className='font-bold text-4xl mb-8'>About <span className='text-light-green drop-shadow-light'>Me</span></h2>
            <div className="grid md:grid-cols-3">
                <div className="grid grid-rows-2 gap-8">
                    <p className='cursor-pointer hover:drop-shadow-bright hover:border-bright-green hover:-translate-y-4 duration-300 bg-dark-green border-4 rounded-xl border-light-green drop-shadow-light p-6'> I'm an ambitious frontend developer based in Baku, Azerbaijan. I have a strong passion for creating beautiful and interactive websites that make a positive impact.</p>
                    <p className='cursor-pointer hover:drop-shadow-bright hover:border-bright-green hover:-translate-y-4 duration-300 bg-dark-green border-4 rounded-xl border-light-green drop-shadow-bright p-6'>I studied Computer Science at Azerbaijani Technical University, where I gained a solid foundation in programming and web development. My education has equipped me with the necessary skills to tackle various frontend challenges.</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <div className="relative">
                        <img className='w-56 h-56 mt-12 object-cover rounded-full' src={Profile} alt="" />
                        <div className="absolute flex-items-center-justify-center top-12 w-60 h-60 rounded-full bg-black"></div>
                    </div>
                    <button className='border-2 flex  gap-2 w-3/5 md:w-max justify-center items-center rounded-md bg-light-green drop-shadow-light text-dark-green font-bold md:px-8 py-2 border-light-green mt-8 hover:bg-bright-green hover:drop-shadow-bright duration-300'>Resume <AiOutlineDownload className='text-xl' /></button>
                </div>
                <div className="grid grid-rows-2 gap-8">
                    <p className='cursor-pointer hover:drop-shadow-bright hover:border-bright-green hover:-translate-y-4 duration-300 bg-dark-green border-4 rounded-xl border-light-green drop-shadow-bright p-6'>With over 1 year of experience in frontend development, I have honed my skills in HTML, CSS, and JavaScript. I have worked on diverse projects, collaborating with teams to deliver high-quality solutions.</p>
                    <p className='cursor-pointer hover:drop-shadow-bright hover:border-bright-green hover:-translate-y-4 duration-300 bg-dark-green border-4 rounded-xl border-light-green drop-shadow-bright p-6'>I'm a firm believer in continuous learning and staying up-to-date with the latest industry trends. I actively seek opportunities to expand my knowledge and improve my coding practices.</p>
                </div>
            </div>
            {/* <h4 className='text-2xl my-8 font-bold'>Frontend Developer!</h4>
            <p className='text-stone-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad distinctio reprehenderit consequuntur illum cumque facilis id dolorem. Obcaecati facere deserunt animi, voluptas a iste. Voluptate natus accusamus odit deleniti libero.
                A aliquid aspernatur dolor quaerat eius iste. Sint voluptate vero, earum itaque necessitatibus aut quas asperiores, fuga consectetur eos veniam perferendis minus aliquid culpa tenetur. Expedita recusandae repudiandae assumenda est!</p> */}
        </div>
    )
}
