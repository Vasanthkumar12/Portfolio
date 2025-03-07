import React, { useContext } from 'react'
import { Sun, Moon } from 'lucide-react';
import { ThemeContext } from '../context/ThemeContext';
// import '../styles/NavBar.css'
export const NavBar = () => {
  const values = useContext(ThemeContext)
  console.log(values.isDark)
  return (
    <div id='nav' className={`${values.isDark ? 'bg-black text-white border-b-1' : 'bg-white text-black'} p-8 font-sans text-[30px] shadow-lg flex justify-between items-center`}>
        <h1 className='text-[30px]'><strong>Vasanthkumar M</strong></h1>
        <button onClick={values.toggle}>
          {
            values.isDark? 
            <Moon className={`${values.isDark? 'bg-black text-white' : 'bg-white text-black'} w-10 h-10 text-black`} strokeWidth={2} /> : 
            <Sun className={`${values.isDark? 'bg-black text-white' : 'bg-white text-black'} w-10 h-10 text-black`} strokeWidth={2}/>
          }
        </button>
    </div>
  )
}
