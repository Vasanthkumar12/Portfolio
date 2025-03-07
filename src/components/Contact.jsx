import React, { useContext } from 'react'
import { Mail, MapPinHouse, Phone } from 'lucide-react';
import { ThemeContext } from '../context/ThemeContext';

export const Contact = () => {
    const {isDark} = useContext(ThemeContext)

  return (
    <div className={`${isDark? 'bg-black text-white border-b-1' : 'bg-white text-black'} flex flex-col shadow-md pt-20 pb-20`}>
        <h1 className='text-center text-[40px] pb-20'>Contact Me</h1>
        <div className='flex justify-center text-[25px]'>
            <div>
                <div className='flex justify-around pb-5'>
                    <Phone /> 
                    <p className='flex-1 pl-5'>+91 9344051301</p>
                </div>
                <div className='flex justify-around pb-5'>
                    <MapPinHouse />
                    <p className='flex-1 pl-5'>Dharmapuri, Tamil Nadu</p>
                </div>
                <div className='flex justify-around pb-5'>
                    <Mail />
                    <p className='flex-1 pl-5'>vasanth23402@gmail.com</p>
                </div>
            </div>
            <div className={`${isDark? 'bg-black text-white border p-10 pl-15 pr-15' : 'bg-white text-black'} shadow-md p-5 ml-60 w-150`}>
                <h1 className='text-[25px] pb-5'><strong>Feel Free To Contact</strong></h1>
                <form className={`${isDark? 'bg-black text-white' : 'bg-white text-black'} flex flex-col`}>
                    <input className={`${isDark? 'bg-black text-white border' : 'bg-white text-black'} shadow-md p-3 mb-5`} type="text" placeholder='Name' />
                    <input className={`${isDark? 'bg-black text-white border' : 'bg-white text-black'} shadow-md p-3 mb-5`} type="email" placeholder='Email' />
                    <input className={`${isDark? 'bg-black text-white border' : 'bg-white text-black'} shadow-md p-3 mb-5`} type="text" placeholder='Subject' />
                    <textarea className={`${isDark? 'bg-black text-white border' : 'bg-white text-black'} shadow-md p-3 mb-5 h-50`} placeholder='Message' />
                    <strong  className={`${isDark? 'bg-black-200 text-white border' : 'bg-white text-black'} shadow-md p-3 mb-5 text-center`}><input type="submit" value="Send Message" /></strong>
                </form>
            </div>
        </div>
    </div>
  )
}
