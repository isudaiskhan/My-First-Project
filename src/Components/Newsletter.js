import React from 'react'

const Newsletter = () => {
  return (
    <>
     
       <div className='w-full py-16 text-white' id='contact'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>

        <div className='lg:col-span-2'>
            <h1 className='md:text-3xl sm:text-2xl font-bold text-xl lg:text-2xl font-serif py-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>Subscribe to our Newsletter</h1>
            <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
        </div><br></br>
          
          
        <div className='flex flex-col sm:flex-row items-center justify-between lg:col-span-2 my-4'>

            <input className='p-3 flex w-full text-white' type='email' placeholder='Enter Your Email' />
            <button className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white  font-medium w-[150px] ml-4 my-6 px-8 py-3'>Submit</button>

        </div>

        </div>
       </div>
       
    </>
  )
}

export default Newsletter
