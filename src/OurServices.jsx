import React from 'react'
import Savings from './assets/Savings.png'
import Personal from './assets/Personal.png'
import Deposit from './assets/Deposite.png'
import  Auto from './assets/Auto.png'
import Product from './assets/Product.png'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';


function OurServices() {
  return (
        <div  className=' bg-pink-50 px-16'>
        <div className='pb-6 mb-6'>
            <h2 className='text-center font-bold text-6xl'>Our Services</h2>
            <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam, dapibus mattis vel feugiat erat tortor eleifend.</p>
        </div>
        <Swiper   modules={[Navigation]}
  spaceBetween={20}
  slidesPerView={4} // or 'auto'
  navigation={true} // adds the arrows
  className="mySwiper">

    <div className='flex px-6 mx-20 mb-25'>
        <div className='w-1/4 mr-5'>
        <SwiperSlide>
        <img src=
        {Personal}
        
        alt="Savings" />
        <div className='mt-5'>
            <p className='font-bold'>
                IPDC SAVING <br /> SCHEMES
            </p>
        </div> </SwiperSlide> 
        </div>
       
        
        <div className='w-1/4 mr-5'>
        <SwiperSlide >
        <img src=
        {Product}
        
        alt="Personal" />
        <div className='mt-5'>
            <p className='font-bold'>
                IPDC PERSONAL<br /> LOANS
            </p>
        </div></SwiperSlide>
        </div>

        <div className='w-1/4 mr-5'>
        <SwiperSlide>
        <img src=
        {Deposit}
        
        alt="Deposit" />
        <div className='mt-5'>
            <p className='font-bold'>
                IPDC DEPOSIT <br />SCHEMES
            </p>
        </div>
        </SwiperSlide>
        </div>


        <div className='w-1/4 '>
        <SwiperSlide>
            <img src=
        {Auto}
        
        alt="Auto" />
        <div className='mt-5'>
            <p className='font-bold'>
                IPDC AUTO <br />LOAN
            </p>
        </div>
         </SwiperSlide>
        </div>
        
    </div>



</Swiper>






    </div>
  )
}

export default OurServices