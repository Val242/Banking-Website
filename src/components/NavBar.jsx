import React from 'react'
import logo from "../assets/logo.png"
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { NavLink } from 'react-router-dom';





function NavBar() {
  return (
    <>
  <nav className= "flex justify-between items-center px-9 py-7">

    
      <div className='ml-20'>
      <img 
      src={logo} 
      alt="logo"
      className='w-27.5 h-13.25' />

      </div>
      
      <div className='flex gap-6 md:flex text-sm font-medium text-gray-700 '>
    <NavLink to="/retail" >RETAIL</NavLink>
            <NavLink to="/sme" >SME</NavLink>
            <NavLink to="/corporate" >CORPORATE</NavLink>
            <NavLink to="/aboutus" >ABOUT US</NavLink>
            <NavLink to="/covid19" >COVID 19</NavLink>
             <NavLink to="/campaigns" >CAMPAIGNS</NavLink>
              
          <MagnifyingGlassIcon className='text-black-400 w-5 h-5 hover:text-pink-400 shadow-emerald-300 '/>
      </div>
      <div > 
        
        <button className='bg-pink-500 text-white px-4 py-2 rounded-[10px] mr-20 w-[200px] h-[50px]'>
          iSERVICE
        </button>
      </div>
      
    


  </nav>

    
    </>
  )
}

export default NavBar