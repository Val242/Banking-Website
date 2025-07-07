import React from 'react'
import integrity from './assets/integrity.png'
import demonstrate from './assets/demonstrate.png'
import diversity from './assets/diversity.png'
import Teamwork from './assets/Teamwork.png'
import Technology from './assets/Technology.png'
import coporate from './assets/coporate.png'
import digital from './assets/digital.png'

function Extra() {
  return (
    <>
    <div>
      <h1 className='flex font-bold text-3xl justify-center items-center '>Creating Extraordinary Customer Experience</h1>
    </div>
    <div>
      <p className='flex justify-center items-center px-20 mt-6 text-gray-500 text-sm'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam bibendum eget morbi dignissim eu pharetra consequat montes, sagittis.
      </p>
    </div>
    <div className='flex flex-col h-screen py-32 px-16'>
        
     <div class="flex h-1/2 ">
     <div className='flex w-1/4 pr-8 pl-2 mr-4 py-2'>
     <div >
      <img
       src={integrity}
        alt="integrity" 
       className='w-[37px] h-[37px]'
        />
        <div>
          <h2 className='font-bold py-2'>Integrity</h2>
          <p className=' text-gray-500'>Displaying the highest level of Integrity in the way we conduct our business</p>

        </div>
     </div>
     </div>
     <div className='flex w-1/4 pr-8 pl-2 mr-4 py-2'>
      <div>
      <img
       src={demonstrate}
        alt="demonstrate" 
       className='w-[37px] h-[37px]'
        />
         <div>
          <h2 className='font-bold py-2'>Demonstrate</h2>
          <p className=' text-gray-500'>Demonstrating a strong Will to Win in the market place</p>

        </div>
        </div>
        
</div>
     
     <div className='flex w-1/4 pr-8 pl-2 mr-4 py-2'>
     <div>
     <img
       src={diversity}
        alt="diversity" 
       className='w-[37px] h-[37px]'
        />
         <div>
          <h2 className='font-bold py-2'>Diversity</h2>
          <p  className=' text-gray-500'>Promoting Diversity in the work place and community</p>

        </div>
      </div>
     </div >
     <div className='flex w-1/4 pr-8 pl-2 mr-4 py-2'>
     <div>
       <img
       src={Teamwork}
        alt="Teamwork" 
       className='w-[37px] h-[37px]'
        />
          <div>
          <h2 className='font-bold py-2'>Teamwork</h2>
          <p className=' text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
             A semper aenean id pen</p>

        </div>
</div>
     </div>
     
     
     
     
     </div>
  <div class="flex h-1/2 ">
     <div className='flex w-1/4 pr-8 pl-2 mr-4 py-2'>
     <div >
      <img
       src={integrity}
        alt="collaboration" 
       className='w-[37px] h-[37px]'
        />
        <div>
          <h2 className='font-bold py-2'>Collaboration</h2>
          <p className=' text-gray-500'>Displaying the highest level of Integrity in the way we conduct our business</p>

        </div>
     </div>
     </div>
     <div className='flex w-1/4 pr-8 pl-2 mr-4 py-2'>
      <div>
      <img
       src={Technology}
        alt="Technology" 
       className='w-[37px] h-[37px]'
        />
         <div>
          <h2 className='font-bold py-2'>Technology</h2>
          <p className=' text-gray-500'>Harnessing the power of Technology to deliver better customer experience</p>

        </div>
        </div>
        
</div>
     
     <div className='flex w-1/4 pr-8 pl-2 mr-4 py-2'>
     <div>
     <img
       src={coporate}
        alt="Corporate" 
       className='w-[37px] h-[37px]'
        />
         <div>
          <h2 className='font-bold py-2'>Corporate</h2>
          <p className=' text-gray-500'>Setting the standard for the best Corporate Citizenship in the communities we work</p>

        </div>
      </div>
     </div >
     <div className='flex w-1/4 pr-8 pl-2 mr-4 py-2'>
     <div>
       <img
       src={digital}
        alt="Digital" 
       className='w-[37px] h-[37px]'
        />
          <div>
          <h2 className='font-bold py-2'>Digital</h2>
          <p className=' text-gray-500'>Setting the standard for the best Corporate Citizenship in the communities we work</p>

        </div>
</div>
     </div>
     
     
     
     
     </div>
    

     



    </div></>
  )
}

export default Extra