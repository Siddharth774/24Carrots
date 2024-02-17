import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import img4 from '../assets/wedding-scroll-cropped.jpg'
const Page3 = () => {
  return (
    <div>
    <div className='h-[150vh] flex justify-between'>


    <div className=' flex m-auto justify-center max-w-[60vw] items-center'>
    <img src={img4} className=' h-[90vh] w-[30vw] m-auto rounded-t-full'/>
    </div>

   <div className='flex flex-col justify-center items-center max-w-[50vw] px-20' >

   <h1 className='text-[72px] text-left font-serif text-green-800' >Making Every Experience Magical</h1>
   <div className='flex justify-end gap-8 mt-10 '>
   <div className="grid grid-rows-4 grid-flow-col gap-4 text-xl font-mono">
   <div>Weddings</div>
   <div>Social</div>
   <div>Corporate</div>
   <div>Venues</div>
   
   </div>
   <div className=''>EXCEPTIONAL WEDDINGS
   <div className='mt-4'> The most important day of your life, is ours too. Your wedding should be the ultimate celebration of your relationship, and our team of experts guide you through the process, offering peace of mind and a remarkable experience.</div>
   </div>
   </div>
  
   <button className='mt-10 bg-orange-700 text-white text-sm font-semibold rounded-full px-4 py-1'>LEARN MORE <FontAwesomeIcon icon={faArrowRight} /></button>
   </div>

    
    </div>
    </div>
  )
}

export default Page3