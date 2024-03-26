import React from 'react'
import { ReactTyped } from 'react-typed';

const Hero = () => {
  return (
    <>

      <div className='text-white' id='home'>
        <div className='max-w-[800px] w-full h-[500px] mx-auto text-center flex flex-col justify-center'>

           <p className='text-[#00df9a] text-2xl p-2 font-serif'>The Mighty Website Hero Section</p>
           <h1 className='md:text-7xl sm:text-6xl text-4xl py-3'>Hello, I am Sudais Khan</h1>

           <div className='flex justify-center items-center'>
            <p className='md:text-3xl sm:text-2xl text-xl font-bold py-3'>I am a Professional</p>

            <ReactTyped className='md:text-3xl sm:text-2xl text-xl font-bold pl-2 text-red-500'
                    strings={['Web Developer','Web Designer','App Developer']}
                    typeSpeed={100}
                    backSpeed={100}
                    loop
                />
           </div>

           <p className='text-xl py-3'>Someone who is consistent always behaves in the same way, has the same attitudes towards people or things, or achieves the same level of success in something.</p>
           <button className=' text-white outline outline-2 outline-white w-[200px] py-[10px] rounded-md font-bold my-6 mx-auto hover:bg-[#00e69d]'>More Details</button>
               
        </div>
      </div>
      
    </>
  )
}

export default Hero
