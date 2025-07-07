import React from 'react'
import westin from './assets/westin.png'
import summit from './assets/summit.png'
import holcim from './assets/holcim.png'
import etv from './assets/etv.png'

function BusinessPatners() {
  return (
    <div className=' bg-pink-50'>
        <div >
            <h3 className='flex justify-center align-middle pt-18'>BUSINESS PARTNERS</h3>
        </div>
        <div className='flex py-32 px-16'>
            <div className='flex w-1/4 pr-8 pl-2 mr-4 py-2'>
                <img 
                src={westin}
                 alt="WESTIN" 
                 className='w-[185.71px] h-[110.36px]'
                 />
            </div>
             <div className='flex w-1/4 pr-8 pl-2 mr-4 py-2'>
                <img src={summit} 
                alt="SUMMIT"
                 className='w-[185.71px] h-[110.36px]'/>
            </div>
             <div className='flex w-1/4 pr-8 pl-2 mr-4 py-2'>
                <img src={holcim} 
                alt="HOLCIM"
                 className='w-[185.71px] h-[110.36px]'/>
            </div>
             <div className='flex w-1/4 pr-8 pl-2 mr-4 py-2'>
                <img src={etv} 
                alt="ETV"
                 className='w-[185.71px] h-[110.36px]'/>
            </div>

        </div>
    </div>
  )
}

export default BusinessPatners