import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import EnNavbar from './EnNavbar'

export default function EnContactLayout({ enContact }) {
    
  const { enContactPageTitle, enEmail, enInstagramId, enContactDesc } =  enContact.fields
    
  return (
    <>
    <EnNavbar />
    <div className='w-full h-screen text-center'>
        {/* <div className=' max-w-[1240px] w-full h-full flex mx-auto pt-20 '> */}
        {/* <div className='pt-30 max-w-[50%] m-auto'> */}
        <div className='max-w-[1240px] max-h-[1240px] w-full h-full flex mx-auto pt-20 '>
          <div className='pt-0 max-w-[50%] max-h-[50%] m-auto'>
            <h2 className='pb-20 tracking-widest'>{ enContactPageTitle }</h2>
            <div>{ enEmail }</div>
            <div>{ enInstagramId }</div>
        <div className='leading-8'>
          {documentToReactComponents(enContactDesc)}
          </div>
        </div>
        </div> 
        </div>
    </>
  )
}
