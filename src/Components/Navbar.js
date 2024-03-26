import React,{useState} from 'react'
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(true);
  const HandleNav = () =>{
      setNav(!nav);
  }
  return (
    <>
            
           <div className='text-white flex justify-between items-center h-24 max-w-[1240px] m-auto px-4'>  
              <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Portfolio</h1>

              <ul className='md:flex hidden'>
              <li className='px-6 text-red-500'><a href='#home'>Home</a></li>
                <li className='px-6 hover:text-red-500'><a href='#about'>About</a></li>
                <li className='px-6 hover:text-red-500'><a href='#contact'>Contact</a></li>
                <li className='px-6 hover:text-red-500'><a href='#service'>Service</a></li>
                <li className='px-6 hover:text-red-500'><a href='#pricing'>Pricing</a></li>
                
                
              </ul>

              <div onClick={HandleNav} className='block md:hidden'>
              {
                !nav ? <AiOutlineClose size={24} className='cursor-pointer' /> :  <AiOutlineMenu size={24} className='cursor-pointer' /> 
              }
                
              </div>

              <div className={!nav ? 'fixed left-0 top-0 w-[50%] md:hidden border-r border-r-gray-800 h-full ease-in-out duration-700 transition-all bg-[#000f00]' : 'fixed left-[-100%]'}>
              <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>Portfolio Menu</h1>

              <ul className='p-4'>
              <li className='p-4 bg-blue-500 border-b rounded-md border-b-gray-500'><a href='#home'>Home</a></li>
                <li className='p-4 border-b border-b-gray-500'><a href='#about'>About</a></li>
                <li className='p-4 border-b border-b-gray-500'><a href='#contact'>Contact</a></li>
                <li className='p-4 border-b border-b-gray-500'><a href='#service'>Service</a></li>
                <li className='p-4 border-b border-b-gray-500'><a href='#pricing'>Pricing</a></li>
                
                
              </ul>

              </div>



           </div> 





    </>
  )
}

export default Navbar
