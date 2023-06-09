import React from 'react'
// import { AiFillGithub } from 'react-icons/ai'
import { BsBoxArrowUpRight, BsGithub } from 'react-icons/bs'

export default function Project({ title, about, github, live, cover }) {
    return (
        <div className='rounded-md bg-dark-green overflow-hidden'>
            <img className='w-full'
                src={cover} alt={title + '_cover'} />
            <div className="w-full p-4">
                <div className="flex justify-between">
                    <h1 className='text-xl'>{title}</h1>
                    <div className="links flex gap-4 text-2xl">
                        <a href={github}>
                            <BsGithub />
                        </a>
                        <a href={live}>
                            <BsBoxArrowUpRight />
                        </a>
                    </div>
                </div>
                <p className='w-full text-sm text-gray-300'>{about}</p>
            </div>
        </div>
    )
}
