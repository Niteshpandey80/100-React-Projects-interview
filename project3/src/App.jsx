import React, { useState } from 'react'

const App = () => {
  const [darkMode , setDarkMode] = useState(false);
  const toggleTheme =()=>{
    setDarkMode(!darkMode)
  }

  return (
   <div className={`h-screen flex items-center justify-center transition-all duration-500 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
      <button onClick={toggleTheme} className='px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 '>
          Toggle Theme 
      </button>
   </div>
  )
}

export default App
