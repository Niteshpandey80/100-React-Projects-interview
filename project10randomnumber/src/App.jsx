import React, { useState } from 'react'

const App = () => {
  const [number , setNumber ] = useState(0);
  const generateNumber = ()=>{
    const newNumber = Math.floor(Math.random()*100);
    setNumber(newNumber);
  }
  return (
    <div className='h-screen bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center p-5'>
         <div className='bg-white  w-full max-w-md rounded-3xl shadow-2xl p-8 text-center'>
            <div className='flex justify-center mb-4'>
          <img
            src="https://cdn-icons-png.flaticon.com/512/5956/5956592.png"
            alt="random"
            className='w-24'
          />
        </div>
        <h1 className='text-4xl font-bold text-gray-800 mb-6'>Random Number </h1>
       
        <button className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl text-lg font-semibold transition-all' onClick={generateNumber}>Generate Number </button>
         </div>
    </div>
  )
}

export default App
