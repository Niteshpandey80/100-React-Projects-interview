import React, { useState } from 'react'

const Navbar = () => {
  const [open , setOpen ] = useState(false)
  return (
    <div className='flex items-center justify-between p-5 bg-blue-400'>
        <div>
          <h1 className='text-xl md:text-2xl'>The coding hub</h1>
        </div>
        <div className='hidden sm:flex sm:gap-10'>
          <h3>Home</h3>
          <h3>About</h3>
          <h3>Contect</h3>
          <h3>help me</h3>
        </div>
        <div className='md:hidden text-3xl' onClick={()=>setOpen(!open)}>=</div>
        {
           open && (
            <div className='md:hidden absolute bg-blue-400 right-0 top-18 w-40 text-2xl flex flex-col h-60 gap-6 pl-4'>
              <h3>Home</h3>
              <h3>About</h3>
              <h3>Contect</h3>
              <h3>help me </h3>
            </div>
           )
        }
    </div>
  )
}

export default Navbar
