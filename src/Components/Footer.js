import React from 'react'
import {FaDribbble,FaInstagram,FaFacebook} from 'react-icons/fa';
import {AiOutlineTwitter,AiFillGithub} from 'react-icons/ai';

const Footer = () => {
  return (
    <>
        
      <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-x-12 text-gray-300' id='pricing'>
        <div className='mt-9'>
                <h1 className='w-full text-3xl font-bold text-[#FFFFFF]'>React</h1>
                <p className='py-4 text-justify'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>

                 <div className='flex justify-between md:w-[85%] my-6'>
                   <FaDribbble size={30} />
                   <FaFacebook size={30} />
                   <AiFillGithub size={30} />
                   <FaInstagram size={30} />
                   <AiOutlineTwitter size={30} />
                 </div>
              </div>

            <div className='lg:col-span-2 grid md:grid-cols-4 justify-around mt-9'>

                 <div>

               <h6 className='font-serif text-[#FFFFFF]'>Quick Links</h6>
               <ul>
                <li className='py-5 text-sm'>Home Page</li>
                <li className='py-5 text-sm'>Statutes & Rules</li>
                <li className='py-5 text-sm'>Clubs & Societies</li>
                <li className='py-5 text-sm'>Seniority List</li>
                <li className='py-5 text-sm'>Contact Us</li>
               </ul>

            </div>

            <div>

                <h6 className='font-serif text-[#FFFFFF]'>Important Links</h6>
                <ul>
                <li className='py-5 text-sm'>Admissions</li>
                <li className='py-5 text-sm'>CMS Login</li>
                <li className='py-5 text-sm'>Digital Library</li>
                <li className='py-5 text-sm'>Usefull Links</li>
                <li className='py-5 text-sm'>Demo Data</li>
                </ul>

                </div>

            <div>

                <h6 className='font-serif text-[#FFFFFF]'>Contact Us</h6>
                <ul>
                <li className='py-5 text-sm'>Location In</li>
                <li className='py-5 text-sm'>Socities House</li>
                <li className='py-5 text-sm'>Seniority List</li>
                <li className='py-5 text-sm'>Development Studies</li>
                <li className='py-5 text-sm'>scholarship & Awards</li>
                </ul>

                </div>


                <div>

                <h6 className='font-serif text-[#FFFFFF]'>Community</h6>
                <ul>
                <li className='py-5 text-sm'>Discussions</li>
                <li className='py-5 text-sm'>Sponsors</li>
                <li className='py-5 text-sm'>Open Collective</li>
                <li className='py-5 text-sm'>Examples</li>
                <li className='py-5 text-sm'>Webpacks</li>
                </ul>

                </div>

                    </div>
                    </div>
                    
    </>
  )
}

export default Footer
