import React from 'react'
import logo from '../assets/Screenshot 2024-02-16 183437.png'
const Navbar = () => {
  return (
    <div className='flex justify-around p-10 gap-4' id="nav">
    <ul className='flex gap-14 '>
    <li>ABOUT</li>
    <li>SERVCES</li>
    <li>EVENTS</li>
    </ul>

    <ul>
    <li><img className='h-[70px]' src={logo}/></li>
    </ul>

    <ul className='flex gap-14'>
    <li>VENUES</li>
    <li>CAREERS</li>
    <li><button className='bg-orange-700 text-white text-sm font-semibold rounded-full px-4 py-1'>GET IN TOUCH  </button></li>
    </ul>
    
    
    </div>
  )
}

export default Navbar