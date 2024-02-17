import React from 'react'
import img1 from "../assets/1.jpg"
import img2 from "../assets/2.png"
import img3 from "../assets/3.jpg"
import img4 from "../assets/4.jpg"
import img5 from "../assets/5.jpg"
import img6 from "../assets/6.jpg"
import img7 from "../assets/7.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const data =[
    {
        id:1,
        image:img1,
    },
    {
        id:2,
        image:img2,
    },
    {
        id:3,
        image:img3,
    },
    {
        id:4,
        image:img4,
    },
    {
        id:5,
        image:img5,
    },
    {
        id:6,
        image:img6,
    },
    {
      id:7,
      image:img7,
  },
]


const Crousal2 = () => {
  return (
    <div className='h-[100vh] flex justify-between'>

    <div className=' flex justify-center max-w-[100vw] items-center'>
    <Splide options={{ perPage: 2, gap:"0.5rem", garg:'free', arrows:false, }}>
    {
      data.map((item)=>{
        return(
          <SplideSlide key={item.id} >
          
          <img className=' h-[95vh] w-[48vw] object-cover  cursor-pointer ease-out duration-300' 
          src={item.image}
          alt={item.id} />
          
        </SplideSlide>
         
        )
      })
    }
    </Splide>
    </div>
    </div>
  )
}

export default Crousal2



    
