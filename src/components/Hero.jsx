import { Github, Linkedin } from 'lucide-react'
import React from 'react'
import image from '../assets/Vasanthkumar.png'
import { ThemeContext } from '../context/ThemeContext'
import { useContext } from 'react'

export const Hero = () => {
    const values = useContext(ThemeContext)

  return (
    <div className={`${values.isDark ? 'bg-black text-white border-b-1' : 'bg-white text-black'} flex flex-row items-center shadow-md p-20`}>
        <div className='flex flex-col items-center'>
            <h1 className='text-[40px] pb-10'>Full Stack Web Developer</h1>
            <p className='pb-10 text-[24px]'>Dynamic and detail-oriented Full Stack Web Developer with seven months of 
                experience as a junior RoR Developer. Proficient in HTML, CSS, JavaScript, and React, 
                with a strong understanding of backend development and SQL. Skilled in problem-solving, 
                code optimization, and building responsive, user-friendly web applications.
            </p>
            <div className='flex justify-evenly w-30'>
                <Github className='w-8 h-8'/>
                <Linkedin className='w-8 h-8'/>
            </div>
        </div>

        <div className='ml-20'>
            <img className='shadow-md p-5 h-auto w-200' src={image} alt="" />
        </div>
    </div>
  )
}
