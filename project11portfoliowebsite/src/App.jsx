import React from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Page from './components/page'

const App = () => {
  return (
    <div className='h-screen bg-[#111111] text-white '>
       <Navbar/>
       <Main/>
       <Page/>
    </div>
  )
}

export default App
