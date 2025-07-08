import React from 'react'
import image from './assets/image.png'

function IPDC() {
  return (
    <div className='flex flex-row h-screen'>
        <div className='flex-5/12 h-screen '>
        <img src={image}
        alt="image" />

        </div>
        <div className='flex-7/12'>
        <div className='mt-16 ml-8 w-[460px] h-[290px]'>
            <h2 className='font-bold '>IPDC AT A GLANCE</h2>
            <p>
                IPDC Finance Limited (previously known as "Industrial Promotion and Development Company of Bangladesh Limited") 
                is the first private sector financial institution of the country established in 1981 by a distinguished group
                of shareholders namely International Finance Corporation (IFC), USA, German Investment and Development Company
                (DEG), Germany, The Aga Khan Fund for Economic Development (AKFED), Switzerland, Commonwealth Development 
                Corporation (CDC), UK and the Government of Bangladesh
            </p>
        </div>

        </div>


    </div>
  )
}

export default IPDC