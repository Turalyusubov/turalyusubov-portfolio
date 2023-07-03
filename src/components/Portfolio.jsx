import React, { useState } from 'react'
import Project from './Project'
import { projects } from '../projects'
import { AiOutlineArrowUp } from 'react-icons/ai'


export default function Portfolio() {
    const [itemCount, setitemCount] = useState(3)
    const itemsToShow = projects.slice(itemCount).reverse()

    function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    return (
        <div className='bg-main-green text-stone-100 relative flex flex-col justify-center items-center py-20 h-full w-full px-6 md:px-32'>
            <h2 className='font-bold mb-8 text-4xl group'>My <span className='text-light-green drop-shadow-light group-hover:text-bright-green group-hover:drop-shadow-bright duration-300'>Portfolio</span></h2>
            <div className="w-full projects grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {itemsToShow.map(project =>
                    <Project
                        key={project.id}
                        title={project.title}
                        about={project.about}
                        github={project.github}
                        live={project.live}
                        cover={project.cover}
                    />
                )}
            </div>
            {itemCount === 3 && <button className='mt-8 border-2 rounded-md w-full md:w-max bg-transparent text-light-green drop-shadow-light font-bold md:px-8 py-2 border-light-green hover:border-bright-green hover:text-bright-green hover:drop-shadow-bright hover:border-x-8 hover:px-6 duration-300' onClick={() => setitemCount(0)}>Show More</button>}
            {itemCount !== 3 && <p className='mt-8 italic text-stone-300'>More in my <a className='text-light-green drop-shadow-light hover:text-bright-green hover:drop-shadow-bright duration-300' target='_blank' href="https://github.com/Turalyusubov">Github</a></p>}
            <div className="flex w-full z-50 justify-center">
                <div onClick={topFunction} className="absolute -bottom-8 bg-dark-green p-4 rounded-full text-light-green text-4xl hover:drop-shadow-bright duration-300 border-2 border-dark-green hover:border-bright-green group cursor-pointer" ><AiOutlineArrowUp className='group-hover:drop-shadow-bright group-hover:text-bright-green duration-300' /></div>
            </div>
        </div>
    )
}
