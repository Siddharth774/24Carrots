import React from 'react'
import img from "../assets/unforegetable-banner.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
const Page4 = () => {
  return (
    <div className='h-[170vh]'>
    <img src={img} className='w-100'/>
    <div className='flex flex-col justify-center items-center'>
    <h1 className='text-[75px] text-center w-[40vw] mt-10 font-serif text-green-900' >Unforgettable Venues</h1>
    <p className='text-[15px] font-[futura-pt] font-thin text-center w-[20vw] font-mono  mt-5'>24 Carrots is the exclusive or preferred caterer at Southern California’s most spectacular properties. From intimate understated spaces to large and luxurious, we’ll help you find the event venue that makes your heart skip a beat.
    </p>
    <button className='bg-orange-700 justify-center text-white text-sm font-semibold rounded-full px-4 py-1 mt-5' >EXPLORE VENUES <FontAwesomeIcon icon={faArrowRight}/>

    </button>
    </div>
    </div>
  )
}

export default Page4