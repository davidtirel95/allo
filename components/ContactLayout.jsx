import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Navbar from './Navbar'

export default function ContactLayout({ contact }) {
    
  const { contactPageTitle, email, instagramId, contactDescription } =  contact.fields
    
  return (
    <>
    <Navbar />
    <div className='w-full h-screen text-center'>
        {/* <div className=' max-w-[1240px] w-full h-full flex mx-auto pt-20 '> */}
        {/* <div className='pt-30 max-w-[50%] m-auto'> */}
        <div className='max-w-[1240px] max-h-[1240px] w-full h-full flex mx-auto pt-20 '>
          <div className='pt-0 max-w-[50%] max-h-[50%] m-auto'>
            <h2 className='pb-20 tracking-widest'>{ contactPageTitle }</h2>
            <div>{ email }</div>
            <div>{ instagramId }</div>
        <div className='leading-8'>
          {documentToReactComponents(contactDescription)}
          </div>
        </div>
        </div> 
        </div>
    </>
  )
}
