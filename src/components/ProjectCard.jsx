import { Github, Linkedin, SquareArrowOutUpRight } from 'lucide-react'
import React from 'react'

export const ProjectCard = ({project}) => {
  console.log(project)
    return (
    <div className='flex justify-between p-10 m-10 shadow-md'>
        <div className='w-80%'>
            <p className='text-[24px] pb-5'><strong>{project.name}</strong></p>
            <p className='text-justify text-[24px]'>{project.description}</p>
        </div>
        <div className='pl-20 flex justify-evenly items-center w-20%'>
            <Github className='pr-5 h-13 w-13' />
            <SquareArrowOutUpRight className='pr-5 h-13 w-13' />
        </div>
    </div>
  )
}
