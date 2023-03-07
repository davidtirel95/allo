import React from 'react'
import Link from 'next/link'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

export default function JoinLayout({ join }) {
    const { joinPageTitle, joinDescription, button } =  join.fields
  return (
    <>

    <div className='w-full h-screen text-center'>
        {/* <div className=' max-w-[1240px] w-full h-full flex mx-auto pt-20 '> */}
        {/* <div className='pt-30 max-w-[50%] m-auto'> */}
        <div className='max-w-[1240px] max-h-[1240px] w-full flex mx-auto pt-20 '>
          <div className='pt-0 max-w-[50%] max-h-[50%] m-auto'>
            <h2 className='pb-20 tracking-widest'>{ joinPageTitle }</h2>
        <div className='leading-8'>
          {documentToReactComponents(joinDescription)}
           <Link href='/'>
           <button>
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
