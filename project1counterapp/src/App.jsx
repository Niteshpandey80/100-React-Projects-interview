import React, { useState } from 'react'

const App = () => {
  const [count , setCount ] = useState(0);
  const increment = ()=>{
    setCount(count+1)
  }
  const decrement =()=>{
    setCount(count-1)
  }
  const reset =()=>{
    setCount(0)
  }
  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='bg-white p-8 rounded-lg shadow-md text-center'>
        <h1 className='text-2xl font-bold rounded-lg shadow-md text-center'>
          Counter App
        </h1>
        <p className='text-4xl font-semibold mb-6'>{count}</p>
        <div className='space-x-4'> 
              <button onClick={decrement} className='px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600'>-</button>
              <button onClick={reset} className='px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600'>Reset</button>
              <button onClick={increment} className='px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600'>+</button>
        </div>
      </div>
    </div>
  )
}

export default App
