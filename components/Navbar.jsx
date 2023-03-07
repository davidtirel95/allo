import React, {useState} from 'react'
import Image from 'next/image'
import bgImg from '../public/allosunshine.png'
import Link from 'next/link'
import {AiOutlineMenu, AiOutlineClose ,AiOutlineMail} from 'react-icons/ai'
import {FaDiscord, FaInstagram, } from 'react-icons/fa'


const Navbar = () => {

  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav);
  } 

  return (
    <div className=' w-full h-30 pt-5 shadow-sm z-[100]' >  
        <div className='flex justify-between items-center w-100 h-full px-2 2xl:px-16'> 
        <Link href='/'><Image src={bgImg} alt='/' width='125' height='50' /></Link>
        <p className='uppercase font-bold italic'>allôsunshine</p>
        <div>
          <ul className='hidden md:flex '>
            <Link href='/about'>
             <li className='ml-10 text-sm uppercase '>about</li>
            </Link>
            <Link href='/news'>
             <li className='ml-10 text-sm uppercase hover:border-b'>news</li>
            </Link>
            <Link href='/jpeg'>
             <li className='ml-10 text-sm uppercase hover:border-b'>jpeg</li>
            </Link>
            <Link href='/join'>
             <li className='ml-10 text-sm uppercase hover:border-b'>join</li>
            </Link>
            <Link href='/contact'>
             <li className='ml-10 text-sm uppercase hover:border-b'>contact</li>
            </Link>
          </ul>
        </div>
         

          <div onClick={handleNav} className='md:hidden'>
            <AiOutlineMenu size={25} />
          </div>
        </div> 
      <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
        <div className={ nav 
        ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500' 
        : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
          <div>
            <div className='flex w-full items-center justify-between'>
             <Link href='/'><Image src={bgImg} width='125' height='50' alt='/' /></Link>
              <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>   
              <AiOutlineClose /> 
              </div>      
            </div> 
            <div className='py-4 flex flex-col'>
              <ul className='uppercase pt-10'>
                <Link href='/about'>
                <li className='py-4 text-sm'>about</li>
                </Link>
                <Link href='/news'>
                <li className='py-4 text-sm'>news</li>
                </Link>
                <Link href='/jpeg'>
                <li className='py-4 text-sm'>jpeg</li>
                </Link>
                <Link href='/join'>
                <li className='py-4 text-sm'>join</li>
                </Link>
                <Link href='/contact'>
                <li className='py-4 text-sm'>contact</li>
                </Link>
              </ul>
              <div className='pt-20'>
                <p className='uppercase tracking-widest'>Lets connect</p>
                <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <FaDiscord />
                  </div>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <FaInstagram />
                  </div>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <AiOutlineMail />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}
export default Navbar