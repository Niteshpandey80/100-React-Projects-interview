import React, { useState } from 'react'

const App = () => {
  const [show ,setShow ] = useState(false);
  const toggleText =()=>{
    setShow(!show)
  }

  return (
    <div className='flex items-center justify-center h-screen bg-gray-100'>
      <div className='bg-white p-8 rounded-xl shadow-lg text-center'>
        <h1 className='mt-2 mb-6 text-lg text-gray-700'>Hide And Show Button App </h1>
           <button onClick={toggleText} className='px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600'>
            {show ? "Hide Message " : "Show Message"}
           </button>
           {show && (
            <p className='mt-4 text-lg text-gray-700'>Hello ! Welcome to React Practice</p>
           )} 
      </div>
    </div>
  )
}

export default App
