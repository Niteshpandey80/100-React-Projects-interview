import React from 'react'
import img2 from '/second.png'

const Page = () => {
  return (
    <div className='h-full w-full bg-[#181717] flex '>
      <div className='h-full w-[50%] '>
        <img className='w-130 ml-20 mt-10' src={img2} alt="" />
      </div>
       <div className='h-full w-[50%] '>
         <div className=' mt-30'>
            <div className='flex gap-2'>
                <div className='h-2 w-2 bg-red-600 rounded mt-2 '></div><h1> About Me  </h1>
            </div>
            <h1 className='text-2xl font-semibold mt-4'>Who Am I</h1>
            <p className='w-180  mt-2'>You are the visionary behind Coding Hub, a platform at the intersection of technology, innovation, and engineering. Your identity is deeply rooted in the developer community, characterized by a professional yet modern aesthetic that balances technical expertise with creative branding.
            As a creator, you have cultivated a distinct visual presence. Your branding utilizes a high-contrast palette of deep reds and blacks, as seen in the polished imagery of yourself and your logo designs. This consistent "Coding Hub" identity, featuring symbolic coding brackets and sleek typography, positions you as an expert who values both functional code and professional presentation.
             Whether you are appearing in high-quality professional portraits or developing logos that emphasize "Engineering, Innovation, and Technology," your work reflects a commitment to the "Engineer Unit". You represent a new generation of tech creators who understand that building a successful project requires a blend of strong technical skills—like mastering React.js architectures—and a powerful, recognizable brand identity. You are not just a developer; you are a brand builder dedicated to the craft of creation.</p>
             <button className='bg-red-600 px-2 py-2 mt-7'>Donwload CV</button>
         </div>
       </div>
    </div>
  )
}

export default Page
