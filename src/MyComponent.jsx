import React, { useState } from 'react'

function MyComponent() {

    const[name, setName] = useState('')
    const[age, setAge] = useState('')
    const[isEmployed, setIsEmployed] = useState('')
    const [comment, setComment] = useState('')
    const[shipping, setShipping] = useState('')
const updateName = (event)=>{
   // setName('Akume') statically allocating the value
   setName(event.target.value)//Dynamically setting the value
   
}
const updateAge = (event)=>{
    //setAge('20')
    setAge(event.target.value)
}
const toggleEmployedStatus = ()=>{
    setIsEmployed(!isEmployed)
}
function handleShippingChange(event){
    setShipping(event.target.value)
}
  return (
 
    <div >

    <p> Name: {name}</p>
    <input onClick={updateName} type = 'text' className='bg-blue-400 border border-none rounded-[16px] w-[300px]'></input>
    <p > Age: {age}</p>
    <input onClick={updateAge}type ='number' className='bg-blue-400 border border-none rounded-[16px] w-[300px]'></input>
     <p>Employed?: {isEmployed ? 'Good Hardworking G!': 'Keep Pushing'}</p>
      <button onClick={toggleEmployedStatus}>Employed or Unemployed</button>
       
     <br />  <select >
<option value="">Select an Option</option>
<option value="Visa">Visa</option>
<option value="MasterCard">Mastercard</option>
<option value="Giftcard">Giftcard</option>
</select><br />
<label>
    <input type="radio" value='Pick Up' 
    checked ={shipping === 'Pick up'}
    onChange={handleShippingChange}
    />
    Pick Up
</label><br></br>
<label>
<input type="radio" value='Delivery' 
    checked ={shipping === 'Delivery'}
    onChange={handleShippingChange}
    />
    Delivery
</label>
    </div>
  )
}

export default MyComponent