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
      
  )
}

export default Home
