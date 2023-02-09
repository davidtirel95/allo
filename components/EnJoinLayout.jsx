import React from 'react'
import EnNavbar from './EnNavbar'
import Link from 'next/link'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

export default function EnJoinLayout({ enJoinPageTitle }) {
    const { enJoinTitle , enJoinDesc, button } =  enJoinPageTitle.fields
  return (
    <>
    <EnNavbar />
    <div className='w-full h-screen text-center'>
        {/* <div className=' max-w-[1240px] w-full h-full flex mx-auto pt-20 '> */}
        {/* <div className='pt-30 max-w-[50%] m-auto'> */}
        <div className='max-w-[1240px] max-h-[1240px] w-full h-full flex mx-auto pt-20 '>
          <div className='pt-0 max-w-[50%] max-h-[50%] m-auto'>
            <h2 className='pb-20 tracking-widest'>{ enJoinTitle }</h2>
        <div className='leading-8'>
          {documentToReactComponents(enJoinDesc)}
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
