import React,{useState} from 'react'
import card from './CardApi'
import MenuCard from './MenuCard'
import iconone from '../Components/assets/sell.png'
import icontwo from '../Components/assets/purchase.png'
import iconthree from '../Components/assets/book.png'


const Cards = () => {
  // const[menuData,setMenuData] = useState(card)
  return (
    <>


      
        {/* <MenuCard menufulldata={menuData} /> */}
           


       
      
       <div className='w-full py-[8rem] px-4 bg-white' id='service'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        <div className='w-full shadow-2xl shadow-gray-400 my-4 border border-gray-300 flex flex-col p-4 hover:scale-105 duration-200 transition-all'>
            <img src={iconone} className='w-20 mx-auto mt-[-5rem] bg-white bg-transparent'/>
            <h2 className='text-xl font-bold text-center py-3'>MINIMAL</h2>
            <h1 className='text-center text-4xl font-bold py-4'>$100</h1>

            <div className='text-center font-medium'>

              <p className='py-3 border-b border-b-gray-300 mx-8 mt-4 bg-gray-200'>Feature 1</p>
              <p className='py-3 border-b mx-8 border-b-gray-300'>Feature 2</p>
              <p className='py-3 border-b mx-8 border-b-gray-300 bg-gray-200'>Feature 3</p>
              <p className='py-3 border-b mx-8 border-b-gray-300'>Feature 4</p>
              <p className='py-3 mx-8 bg-gray-200'>Feature 5</p>

            </div>

            <button className='outline outline-2 hover:bg-[#00df9a] hover:text-white outline-[#00df9a] w-[200px] font-medium my-6 mx-auto px-6 py-3'>Request Offer</button>

        </div>

        <div className='w-full shadow-2xl shadow-gray-400 my-4 border border-gray-300 flex flex-col p-4 hover:scale-105 duration-200 transition-all'>
            <img src={icontwo} className='w-20 mx-auto mt-[-5rem] bg-white bg-transparent' />
            <h2 className='text-xl font-bold text-center py-3'>MEDIUM</h2>
            <h1 className='text-center text-4xl font-bold py-4 '>$300</h1>

            <div className='text-center font-medium'>

              <p className='py-3 border-b border-b-gray-300 mx-8 mt-4 bg-gray-200'>Feature 1</p>
              <p className='py-3 border-b mx-8 border-b-gray-300'>Feature 2</p>
              <p className='py-3 border-b mx-8 border-b-gray-300 bg-gray-200'>Feature 3</p>
              <p className='py-3 border-b mx-8 border-b-gray-300'>Feature 4</p>
              <p className='py-3 mx-8 bg-gray-200'>Feature 5</p>

            </div>

            <button className='outline outline-2 hover:bg-[#49f240] hover:text-white outline-[#49f240] w-[200px] font-medium my-6 mx-auto px-6 py-3'>Request Offer</button>

        </div>


        <div className='w-full shadow-2xl shadow-gray-400 my-4 border border-gray-300 flex flex-col p-4 hover:scale-105 duration-200 transition-all'>
            <img src={iconthree} className='w-20 mx-auto mt-[-5rem] bg-white bg-transparent' />
            <h2 className='text-xl font-bold text-center py-3'>EXPERT</h2>
            <h1 className='text-center text-4xl font-bold py-4 '>$500</h1>

            <div className='text-center font-medium'>

              <p className='py-3 border-b border-b-gray-300 mx-8 mt-4 bg-gray-200'>Feature 1</p>
              <p className='py-3 border-b mx-8 border-b-gray-300'>Feature 2</p>
              <p className='py-3 border-b mx-8 border-b-gray-300 bg-gray-200'>Feature 3</p>
              <p className='py-3 border-b mx-8 border-b-gray-300'>Feature 4</p>
              <p className='py-3 mx-8 bg-gray-200'>Feature 5</p>

            </div>

            <button className='outline outline-2 hover:bg-[#FFB236] hover:text-white outline-[#FFB236] w-[200px] font-medium my-6 mx-auto px-6 py-3'>Request Offer</button>

        </div>






        </div>
       </div>
      
    </>
  )
}

export default Cards
