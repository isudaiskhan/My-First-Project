import React from 'react'
import laptopimg from '../Components/assets/01.jpg'

const Main = () => {
  return (
    <>

     <div className='w-full bg-white py-16 px-4' id='about'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        
       <img src={laptopimg} className='w-[400px] mx-auto my-4' />

       <div className='flex flex-col justify-center'>
          
          
          <h1 className='md:text-3xl sm:text-2xl font-bold py-2 font-serif'>Online Bus Ticket Reservation System</h1>
       
          <p className='text-justify text-[#474747]'>By virtue of its decades-long legacy of being a distinguished public sector engineering university at the National and International level, I feel proud to lead an institution, which is my alma mater. The admissions process for the new academic session (2022-23) has just started after undergoing a complete revamping from a manual to an online operation. It may pose challenges for aspiring candidates who would need to be vigilant and well versed in online submission processes. Rest assured, we are taking all the necessary steps needed to assist you and to ensure that the process goes through seamlessly.</p>

          <button className=' hover:outline-none text-black outline outline-2 outline-black hover:bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% hover:text-white w-[180px] rounded-md font-medium my-6 ms-auto py-2'>See More</button>

       </div>

     </div>
      </div>
      
    </>
  )
}

export default Main
