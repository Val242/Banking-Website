import React, { useState } from 'react'

function NewsLetter() {
  const[email,setEmail] = useState('ebongvalentine70@gmail.com')

  const handleEmail = (e)=>{
    setEmail(e.target.value)
  }
  return (
    <div className=' bg-pink-50'>
    
     <section className="bg-pink-50 py-16 px-6">
  <div className=" mx-auto text-center">
    <h2 className="textmax-w-2xl-3xl font-bold mb-4">Newsletter</h2>
    <p className="text-gray-600 mb-6">
      Learn about the latest updates and features by subscribing to our newsletter.
    </p>

    <form className="flex flex-col sm:flex-row justify-center gap-4">
      <input
        type="email"
        placeholder={email}
        className="px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 w-full sm:w-auto"
      />
      <button
        type="submit"
        className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-md transition-all duration-300"
        onClick={handleEmail}
      >
        Subscribe
      </button>
      <p>{setEmail}</p>
    </form>
  </div>
</section>






    </div>
  )
}

export default NewsLetter