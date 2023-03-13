import React from 'react'
import Link from 'next/link'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import allo from 'assets/allo.jpg'
import Image from 'next/image'

export default function JoinLayout({ join }) {
    const { joinPageTitle, joinDescription, button } =  join.fields
  return (
    <>

    <div className='w-full h-screen text-center'>
        {/* <div className=' max-w-[1240px] w-full h-full flex mx-auto pt-20 '> */}
        {/* <div className='pt-30 max-w-[50%] m-auto'> */}
        <div className='max-w-[1240px] max-h-[1240px] w-full flex mx-auto pt-20 '>
          <div className='pt-0 max-w-[50%] max-h-[50%] m-auto'>
            <div className='ml-5'>
            <div className='ml-20'>
              <div className='ml-20'>
                  <Image src={allo} 
                alt='/' priority 
                width={100}
                className='pb-20 ml-20'
                />
              </div>
            </div>
            </div>
           
            {/* <h2 className='pb-20 tracking-widest'>{ joinPageTitle }</h2> */}
        <div className='leading-8'>
          {documentToReactComponents(joinDescription)}
           <Link href='/'>
           <button className='mt-20 border-2 rounded  border-black px-1  hover:bg-stone-400 ease-in duration-500'>
                { button }
            </button>
            </Link>
          </div>
        </div>
        </div> 
        </div>
    </>
  )
}
