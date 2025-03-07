import React from 'react'
import { Mail, MapPinHouse, Phone } from 'lucide-react';

export const Contact = () => {
  return (
    <div className='flex flex-col shadow-md mt-20 pb-20'>
        <h1 className='text-center text-[40px] pb-10'>Contact Me</h1>
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
            <div className='shadow-md p-5 ml-60 w-150'>
                <h1 className='text-[25px] pb-5'><strong>Feel Free To Contact</strong></h1>
                <form className='flex flex-col'>
                    <input className='shadow-md p-3 mb-5' type="text" placeholder='Name' />
                    <input className='shadow-md p-3 mb-5' type="email" placeholder='Email' />
                    <input className='shadow-md p-3 mb-5' type="text" placeholder='Subject' />
                    <textarea className='shadow-md p-3 mb-5 h-50' placeholder='Message' />
                    <strong  className='shadow-md p-3 mb-5 text-center'><input type="submit" value="Send Message" /></strong>
                </form>
            </div>
        </div>
    </div>
  )
}
