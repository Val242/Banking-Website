import React from 'react'
import { FaFacebookF } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaInstagramSquare } from 'react-icons/fa'
import { FaPhoneAlt } from 'react-icons/fa'

function Footer() {
  return (
    <div>
        <div className='flex mx-auto max-w-6xl '>
            <div className=' flex w-1/4 font-sans mr-4 flex-col'>
                <h3 className='font-semibold  mb-3'>About the company</h3>
            <div className='pb-4'>
                <p className='text-gray-500 '>Learn To Love Growth <br /> And Change And You Will <br /> Be A Success. Microsoft <br /> Patch </p>
              </div>
              <div className='flex flex-row mt-4'>
                 <a href=""><FaFacebookF className='w-[24px] h-[24px] text-blue-500 mr-4' ></FaFacebookF></a> 
                           <a href=""><FaLinkedin className='w-[24px] h-[24px] text-blue-500 mr-4' ></FaLinkedin></a> 
                           <a href=""><FaYoutube className='w-[24px] h-[24px] text-red-600 mr-4'></FaYoutube></a> 
                            <a href=""><FaInstagramSquare className='w-[24px] h-[24px] text-pink-800 mr-0' /></a>
              </div>
            
            </div>
            <div className=' flex w-1/4 font-sans mr-4 flex-col'>
                <h3 className='font-semibold mb-3'>Products</h3>
                <ul className='list-none text-gray-500'>
                    <li>CSR Activities</li>
                    <li>Green Banking</li>
                    <li>News Ongoing</li>
                    <li>Campaign</li>
                    <li>Updates</li>
                </ul>
            </div>
            <div className=' flex w-1/4 font-sans mr-4 flex-col '>
                <h3 className='font-semibold mb-3'>Get Started</h3>
                <ul className='list-none text-gray-500'>
                    <li>Career</li>
                    <li>Contact Us</li>
                    <li>Government Securities</li>
                    <li>Examples</li>
                    <li>NIS</li>
                </ul>
            </div>
            <div className=' flex w-1/4 font-sans flex-col '> 
                <h3 className='font-semibold mb-3'>About</h3>
                  <ul className='list-none text-gray-500'>
                    <li>IPDC at a Glance</li>
                    <li>Mission, Vision and Values</li>
                    <li>Corporate Governance</li>
                    <li>Shareholders</li>
                    <li>Investor Relations</li>
                </ul>
            </div>
        </div>
        <div className='flex text-center'>
            <FaPhoneAlt className='text-base w-[24px] h-[24px]'></FaPhoneAlt>
                         <span>16519</span>
        </div>
    </div>
  )
}

export default Footer