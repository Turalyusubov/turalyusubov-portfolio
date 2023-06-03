import React from 'react'

import {
    AiFillHtml5,
    DiCss3,
    SiJavascript,
    DiSass,
    FaBootstrap,
    DiJqueryLogo,
    SiTailwindcss,
    BsGit,
    FaReact
} from 'react-icons/all'

export default function Skills() {
    const skills = [
        {
            id: 1,
            name: 'HTML',
            logo: <AiFillHtml5 />,
            color: 'group-hover:bg-orange-500'
        },
        {
            id: 2,
            name: 'CSS',
            logo: <DiCss3 />,
            color: 'group-hover:bg-blue-600'
        },
        {
            id: 3,
            name: 'Javascript',
            logo: <SiJavascript />,
            color: 'group-hover:bg-yellow-300'
        },
        {
            id: 4,
            name: 'SASS',
            logo: <DiSass />,
            color: 'group-hover:bg-pink-400'
        },
        {
            id: 5,
            name: 'Jquery',
            logo: <DiJqueryLogo />,
            color: 'group-hover:bg-sky-700'
        },
        {
            id: 6,
            name: 'Bootstrap',
            logo: <FaBootstrap />,
            color: 'group-hover:bg-violet-500'
        },
        {
            id: 7,
            name: 'Tailwind',
            logo: <SiTailwindcss />,
            color: 'group-hover:bg-cyan-400'
        },
        {
            id: 8,
            name: 'Git',
            logo: <BsGit />,
            color: 'group-hover:bg-red-600'
        },
        {
            id: 9,
            name: 'React.js',
            logo: <FaReact />,
            color: 'group-hover:bg-sky-300'
        }
    ]
    return (
        <div className='bg-dark-green text-stone-100 relative flex flex-col justify-center items-center py-20 h-full md:h-screen w-full px-6 md:px-32'>
            <h2 className='font-bold mb-20 text-4xl'>My <span className='text-light-green'>Skills</span></h2>
            <div className="grid grid-cols-5 gap-10 w-full">
                {skills.map(skill =>
                    <div key={skill.id} className="flex w-full h-20 items-center justify-center skill-block group relative items-center gap-2">
                        <div className={`bg-light-green overflow-hidden absolute skill-logo ${skill.color} duration-300 z-10 rounded-full text-5xl p-3`}>
                            {skill.logo}
                        </div>
                        <p className='skill-name absolute text-dark-green group-hover:text-white left-0 z-0'>{skill.name}</p>
                    </div>
                )}
            </div>

        </div>
    )
}
