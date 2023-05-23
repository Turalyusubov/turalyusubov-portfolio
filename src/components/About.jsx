import React from 'react'
import Profile from '../assets/profile.png'

export default function About() {
    return (
        <div className='bg-main-green text-stone-100 relative flex flex-col justify-center items-center py-20 h-full md:h-screen w-full px-6 md:px-32'>
            <h2 className='font-bold text-4xl'>About <span className='text-light-green'>Me</span></h2>
            <img className='w-56 h-56 mt-12 object-cover rounded-full' src={Profile} alt="" />
            <h4 className='text-2xl my-8 font-bold'>Frontend Developer!</h4>
            <p className='text-stone-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad distinctio reprehenderit consequuntur illum cumque facilis id dolorem. Obcaecati facere deserunt animi, voluptas a iste. Voluptate natus accusamus odit deleniti libero.
                A aliquid aspernatur dolor quaerat eius iste. Sint voluptate vero, earum itaque necessitatibus aut quas asperiores, fuga consectetur eos veniam perferendis minus aliquid culpa tenetur. Expedita recusandae repudiandae assumenda est!</p>
            <button className='border-2 rounded-md bg-light-green text-dark-green font-bold md:px-8 py-2 border-light-green mt-8'>Read More</button>
        </div>
    )
}
