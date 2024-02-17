import React from 'react'
import img10 from "../assets/10.gif"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
const data =[
    {
        id:1,
        image:img10,
    },
   ]
const Page5 = () => {
  return (
<div className='flex w-[1250px] m-auto mt-20' >
    <div className='w-[16vw]'>
    <h1 className='font-serif text-[30px]'>Gourmet Catering</h1>
    <p className='font-mono mt-2'>Our professionally-trained culinary team is passionate and proud of our diverse and thoughtful menu, always cooking up something that aligns with your great taste.</p>
    <button className='border-orange-500 border-[2px] rounded-full mt-2 py-1 px-4 text-orange-500'>LEARN MORE <FontAwesomeIcon icon={faArrowRight} /></button>
   
    <h1 className='font-serif text-[30px] mt-20'>Gourmet Catering</h1>
    <p className='font-mono mt-2'>Our professionally-trained culinary team is passionate and proud of our diverse and thoughtful menu, always cooking up something that aligns with your great taste.</p>
    <button className='border-orange-500 border-[2px] rounded-full mt-2 py-1 px-4 text-orange-500'>LEARN MORE <FontAwesomeIcon icon={faArrowRight} /></button>
    </div>
    
    <div className=' flex justify-center w-[50vw] items-center h-[100vh] m-auto'>
    <Splide options={{ perPage: 1, gap:"0.5rem", garg:'free', arrows: false, autoplay:true }}>
    {
      data.map((item)=>{
        return(
          <SplideSlide key={item.id} >
          
          <img className=' h-[90vh] w-[30vw] m-auto object-cover rounded-t-[50rem] cursor-pointer ease-out duration-300' 
          src={item.image}
          alt={item.id} />
          
        </SplideSlide>
         
        )
      })
    }
    </Splide>
    </div>

    <div className='w-[16vw]'>
    <h1 className='font-serif text-[30px]'>Gourmet Catering</h1>
    <p className='font-mono mt-2'>Our professionally-trained culinary team is passionate and proud of our diverse and thoughtful menu, always cooking up something that aligns with your great taste.</p>
    <button className='border-orange-500 border-[2px] rounded-full mt-2 py-1 px-4 text-orange-500'>LEARN MORE <FontAwesomeIcon icon={faArrowRight} /></button>
   
    <h1 className='font-serif text-[30px] mt-20'  >Gourmet Catering</h1>
    <p className='font-mono mt-2'>Our professionally-trained culinary team is passionate and proud of our diverse and thoughtful menu, always cooking up something that aligns with your great taste.</p>
    <button className='border-orange-500 border-[2px] rounded-full mt-2 py-1 px-4 text-orange-500'>LEARN MORE <FontAwesomeIcon icon={faArrowRight} /></button>
    </div>
    </div>
  )
}

export default Page5