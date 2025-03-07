import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3Alt, faGit, faGithub, faHtml5, faReact, faSquareJs } from '@fortawesome/free-brands-svg-icons'
import React from 'react'

export const Skills = () => {
  return (
    <div className='flex flex-col items-center p-20 shadow-md text-[40px]'>
        <h1>Skills</h1>
        <div className='pt-20 flex flex-row'>
            <div className='flex flex-col mr-20'>
                <FontAwesomeIcon className='text-[80px]' icon={faHtml5} />
                <strong>HTML</strong>
            </div>
            <div className='flex flex-col mr-20'>
                <FontAwesomeIcon className='text-[80px]' icon={faCss3Alt} />
                <strong>CSS</strong>
            </div>
            <div className='flex flex-col mr-20'>
                <FontAwesomeIcon className='text-[80px]' icon={faSquareJs} />
                <strong className='pl-3'>JS</strong>
            </div>
            <div className='flex flex-col mr-20'>
                <FontAwesomeIcon className='text-[80px]' icon={faReact} />
                <strong>React</strong>
            </div>
            <div className='flex flex-col mr-20'>
                <FontAwesomeIcon className='text-[80px]' icon={faGithub} />
                <strong className='pl-2' >Git</strong>
            </div>
        </div>
    </div>
  )
}
