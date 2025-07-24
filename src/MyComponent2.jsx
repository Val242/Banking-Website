import React, { useEffect, useState } from 'react'

function MyComponent2() {
    const[count, setCount] = useState('')
    const[color, setColor] = useState('green')
    
    useEffect(()=>{
        alert(`Value of count has changed to ${count}`)
    },[count,color])
    const addCount =(c)=>{
        setCount(c + 1)
    }
    
  return (
    <div>
        <p>Count : {count}</p>
         <button onClick={addCount}>Add</button>



    </div>
  )
}

export default MyComponent2