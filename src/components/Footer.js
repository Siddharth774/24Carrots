import React from 'react'
import img from '../assets/Screenshot 2024-02-16 231021.png'
import logo from '../assets/Screenshot 2024-02-17 002041.png'
const Footer = () => {
  return (
    <div className='flex flex-col font-mono font-thin bg-gray-200'>
    <div className='max-w-[1250px] p-10 m-auto flex justify-between gap-[12rem]'>

    <div className='flex'>
    <div className='w-[30vw]'>
    <img className='h-[70px]' src={logo}/>
    <p className='text-[15px]  font-thin text-balance font-mono mt-5 '>The event specialists at our Southern California headquarters are available to help with every aspect of your event.
   </p>
   
    </div>

    <div className='grid grid-cols-5 w-[70vw] gap-10 text-l'>
    <ul>
    <li className='mb-4 font-serif text-xl'>About</li>
    <li>About 24 Carrots</li>
    <li>Meet the Team</li>
    <li>Awards & Press</li>
    <li>Blog</li>
    </ul>
    <ul>
    <li className='mb-4 font-serif text-xl'>Services</li>
    <li>Gourmet Catering</li>
    <li> Bar Service</li>
    <li>Staffing</li>
    <li>Production</li>
    </ul>
    
    <ul>
    <li className='mb-4 font-serif text-xl'>Events</li>
    <li>Weddings</li>
    <li>Corporate</li>
    <li>Social</li>
    <li>Gallery</li>
    </ul>
    <ul>
    <li className='mb-4 font-serif text-xl'>Follow Us</li>
    <li>Facebook</li>
    <li>Instagram</li>
    <li>Pinterest</li>
    <li>Linkedin</li>
    </ul>
    </div>

</div>



   
    
    
    
    </div>


    <div className='border-y-2 border-green-400 w-[30vw] ml-40 mb-10 mr-auto mt-4'></div>
<div className='flex m-auto justify-between w-[80vw] '>
<div className='flex gap-10 '>

    <ul>
    <li>CALL US</li>
    <li> MAIL US</li>
    <li>FIND US</li>
    </ul>
    <ul>
    <li>714.942.6•800.717.1545</li>
    <li>info@24carrots.com</li>
    <li>150 Baker Street East, Costa Mesa, CA 92626
 
    </li>
    </ul>
    </div>
    <div className='flex flex-wrap ml-20'>
    <div className='mt-10'>Site & design by Dooley Creative Co.</div>
    <img src={img} alt="img"/>
    </div>
 </div>
 <div className='border-y-2 border-green-400 w-[80vw] m-auto mt-4'></div>
<span className='flex items-center justify-center bg-green-300 mt-10 max-w-[200px] px-6 py-1 rounded-t-2xl  m-auto'><a href="#nav">BACK TO TOP</a></span>
    </div>
  )
}

export default Footer