'use client'

import { useState } from 'react';
export default function Home() {

  const [count, setCount ] = useState(0)
  function handleClick(){

    setCount(count + 1) 
    
    
    console.log (`You Clicked me`)
  }
  return (
   <div>

    <h1>
      Project Midnight 
    </h1>

    <button onClick={handleClick}>
      click me
    </button>
   </div>
  );
}
