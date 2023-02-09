import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Navbar from './Navbar'
import Image from 'next/image'

export default function JpegLayout({ jpeg }) {
    
  const { title, jpegDate, frame }  =  jpeg.fields
    
  return (
    <>
    <Navbar />
    <div className='w-full h-screen text-center'>
        <div className='max-w-[1240px] max-h-[1240px] w-full h-full flex mx-auto pt-20 '>
          <div className='pt-0 max-w-[50%] max-h-[50%] m-auto'>
            <h2 className='pb-20 tracking-widest'>{ title }</h2>
        <div className='leading-8'>
          {jpegDate}
         <div>
            <Image 
           src= {'https:' + frame.fields.file.url }
           width={ frame.fields.file.details.image.width }
           height={ frame.fields.file.details.image.height }
           alt='/yo'
          />  
           </div>  
          </div>
        </div>
        </div> 
        </div>
    </>
  )
}
