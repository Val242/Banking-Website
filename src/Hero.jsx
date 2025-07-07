import React from 'react'
import family from '../src/assets/family.png'
import { FaFacebookF } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaInstagramSquare } from 'react-icons/fa'
import { FaPhoneAlt } from 'react-icons/fa'





function Hero() {
  return (
    <div className='flex h-screen p-5'>
        <div className='flex-1 ml-[23.25px]'>
<div className='font-bold text-7xl w-1.9xl px-[30px] py-[55px]'>
<h1  >Chase Your <br />Dream with us</h1>
</div>
<p className='text-gray-500 px-[33.75px] py-[40px] items-center'>The harder you work for something, the greater you’ll feel
     when you achieve it.</p>
     <div>
        <button className='bg-pink-500 rounded-[10px] text-white mr-2 w-[157px] h-[46px] '>
    APPLY ONLINE
        </button>
        <button className='bg-white text-pink-500 rounded-[10px] border border-pink-500 w-[157px] h-[46px] '>
        LOAN CALCULATOR
        </button>
     </div>
     <div className='mt-50 text-sm'>
        <div className='flex flex-row gap-4'>
             <div className='flex items-center gap-1'>
                <FaPhoneAlt className='text-base w-[24px] h-[24px]'></FaPhoneAlt>
             <span>16519</span>
             </div>
           <a href=""><FaFacebookF className='w-[24px] h-[24px]'></FaFacebookF></a> 
           <a href=""><FaLinkedin className='w-[24px] h-[24px]'></FaLinkedin></a> 
           <a href=""><FaYoutube className='w-[24px] h-[24px]'></FaYoutube></a> 
            <a href=""><FaInstagramSquare className='w-[24px] h-[24px]'/></a>
           
        </div>
     </div>
   


    </div>
    <div className='flex-1 '>
        <img src={family} 
        alt="family" 
        className='w-[750px] h-[682px]'/>
    </div>
    </div>
  )
}

export default Hero