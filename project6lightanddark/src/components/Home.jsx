import React, { useEffect, useState } from 'react'

const Home = () => {
    const [dark , setDark] = useState(false);
    useEffect(()=>{
      const savedToggle = localStorage.getItem('theme');
       if(savedToggle==='dark'){
        setDark(true)
       }
    },[])
    const handleToggle = ()=>{
        if(dark){
            localStorage.setItem('theme' , 'light');
            setDark(false)
        }else{
            localStorage.setItem('theme' , 'dark');
            setDark(true)
        }
    }

  return (
       <div className={`h-screen flex flex-col items-center justify-center ${dark ? "bg-black text-white " : "bg-white text-black"} `}>
         <h1 className={`text-xl ${ dark ? 'text-white ' : 'text-black'}`}>Light Mode and Dark Mode  </h1>
         <button className={`mt-5 rounded px-4 py-3 ${dark ? "bg-white text-black " : "bg-black text-white"}`} onClick={handleToggle} >Toggle Button</button>
       </div>
  )
}

export default Home
