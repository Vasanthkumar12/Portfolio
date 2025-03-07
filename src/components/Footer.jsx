import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

export const Footer = () => {
  const {isDark} = useContext(ThemeContext)
  return (
    <div className={`${isDark? 'bg-black text-white' : 'bg-white text-black'} text-center p-10 text-[24px]`}>
        <p>&copy; 2025 by <strong>Vasanthkumar Munusamy</strong></p>
    </div>
  )
}
