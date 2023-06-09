import React from 'react'
import Project from './Project'
import { projects } from '../projects'

export default function Portfolio() {
    console.log(projects)
    return (
        <div className='bg-main-green text-stone-100 relative flex flex-col justify-center items-center py-20 h-full w-full px-6 md:px-32'>
            <h2 className='font-bold mb-20 text-4xl'>My <span className='text-light-green'>Portfolio</span></h2>
            <div className="w-full projects grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map(project =>
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
        </div>
    )
}
