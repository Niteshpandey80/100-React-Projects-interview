import React, { useState } from 'react'

const App = () => {

  const [dob, setDob] = useState("")
  const [age, setAge] = useState(null)

  

  return (
    <div className='h-screen flex items-center justify-center bg-gray-100'>

      <div className='bg-white p-8 rounded-xl shadow-lg w-[350px]'>

        <h1 className='text-3xl font-bold text-center mb-6'>
          Age Calculator
        </h1>

        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          className='border w-full p-3 rounded-lg mb-4'
        />

        <button
          onClick={calculateAge}
          className='bg-black text-white w-full p-3 rounded-lg'
        >
          Calculate Age
        </button>

        {
          age !== null && (
            <h2 className='text-2xl text-center mt-6'>
              Your Age is {age}
            </h2>
          )
        }

      </div>

    </div>
  )
}

export default App