import React, { useContext } from 'react'
import {ProjectCard} from './ProjectCard'
import { ThemeContext } from '../context/ThemeContext'


export const Projects = () => {
    const {isDark} = useContext(ThemeContext)
    const projects = [
        {
            "name": "Khan Academy Cloned Website",
            "description": "Collaborated with a team to clone the Khan Academy website, focusing on creating functional sign-up pages for teachers, students, and parents. Developed the footer component, ensuring consistent design and user experience across the cloned website. Maintained version control using Git to facilitate collaborative development and track changes.",
            "github": "https://github.com/Vasanthkumar12/B41_WEB_026_Code-Crusaders",
            "netlify": "https://khan-ack-clone.netlify.app/",
            "techstacks": ["HTML", "CSS", "JavaScript"]
        },
        {
            "name": "New Life in Christ Church",
            "description": "Developed a responsive web interface to display detailed information about the church's events, ministries, and services using HTML5 and CSS3. Integrated Git for version control to manage project changes and facilitate collaborative workflows. Implemented best practices for web development to ensure scalability and performance of the church's web application.",
            "github": "https://github.com/Vasanthkumar12/new-life-in-christ",
            "netlify": "https://new-life-in-jesus-christ-church.netlify.app/",
            "techstacks": ["HTML", "CSS", "JavaScript", "React"]
        },
    ]
  return (
    <div className={`${isDark? 'bg-black text-white border-b-1' : 'bg-white text-black'} p-10 shadow-md`}>
        <h1 className='text-center text-[40px] mt-10'>Projects</h1>
        {projects.map((project, id) => (
            <ProjectCard key={id} project={project} />
        ))}
    </div>
  )
}
