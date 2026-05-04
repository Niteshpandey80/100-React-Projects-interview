import React, { useState } from 'react'

const Dropdown = () => {
    const [selected , setSelected] = useState("");
    const options = ["React" , "Node.js" , "MongoDB" , "Express"] ; 
  return (
    <div className='flex items-center justify-center h-screen bg-gray-100'>
      <div className='w-64'>
         <label className='block mb-2 text-sm font-medium text-gray-700'>
            Select Tchnology
         </label>
         <select value={selected} onChange={(e)=>setSelected(e.target.value)} className='w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white'>
             <option value="">--Choose an option --</option>
             {
                options.map((item , index)=>(
                   <option key={index} value={item}>
                    {item}
                   </option>
                ))
             }  
         </select>
         {
            selected && (
                <p className='mt-3 text-sm text-gray-600'>
                    Selected : <span className='font-semibold'>{selected}</span>
                </p>
            )
         }
      </div>
    </div>
  )
}

export default Dropdown
