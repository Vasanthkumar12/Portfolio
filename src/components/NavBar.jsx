import React from 'react'
import { Sun } from 'lucide-react';
// import '../styles/NavBar.css'
export const NavBar = () => {
  return (
    <div id='nav' className='p-8 font-sans text-[30px] shadow-md flex justify-between items-center'>
        <h1 className='text-[30px]'><strong>Vasanthkumar M</strong></h1>
        <Sun className='w-10 h-10 text-black' strokeWidth={2} />
    </div>
  )
}
