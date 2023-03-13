import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Link from 'next/link'
import {AiOutlineInstagram, AiOutlineMail} from 'react-icons/ai'
import { useState } from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard'

export default function ContactLayout({ contact }) {
    
  const { contactPageTitle, email, instagramId, contactDescription } =  contact.fields
  const [value, setValue] = useState('')  
  const [copied, setCopied] = useState(false)


  return (
    <>

    <div className='w-full h-screen text-center'>
        {/* <div className=' max-w-[1240px] w-full h-full flex mx-auto pt-20 '> */}
        {/* <div className='pt-30 max-w-[50%] m-auto'> */}
        <div className='max-w-[1240px] max-h-[1240px] w-full flex mx-auto'>
          <div className='max-w-[50%] max-h-[50%] m-auto'>
            <div className='leading-8 pb-10'>
            {documentToReactComponents(contactDescription)}
            </div>
              <div className='flex justify-center items-center pb-3'>
              <AiOutlineMail size={'25px'} />

              <CopyToClipboard text={ 'contact@allosunshine.com'}
              onCopy={() => setCopied(true)} 
              >
              <div className='pl-2 cursor-copy '
              value={value}
              onChange={({ target : { value } }) => setValue(value)}
              >
              contact@allosunshine.com
              {/* { email }       */}
              </div>
              </CopyToClipboard>
              { copied ? <span className='text-cyan   pl-3'>Copied!</span> : null }
             
            </div>
            <div className='flex justify-center items-center pb-3'>
              <AiOutlineInstagram  size={'25px'}/> 
              <Link href='https://www.instagram.com/allosunshine.xyz/'>
              <div className='pl-2'>{ instagramId }</div>
              </Link>
            </div>
          
        </div>
        </div> 
        </div>
    </>
  )
}
