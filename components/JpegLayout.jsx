import React, { useState, useEffect, useRef,  } from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Image from 'next/image'
import Draggable from 'react-draggable'


  


export default function JpegLayout({ jpeg }) {
//   if (typeof window !== "undefined") {
// const containerRef = useRef<HTMLDivElement>(null)
// const boxRef = useRef<HTMLDivElement>(null)

// useEffect(() => {
//   if(!boxRef.current || containerRef.current ) return; 

//   const box = boxRef.current;
//   const container = containerRef.current 

//   box.addEventListener('mousedown', () => {

//   })
// }, [])


  
const { title, jpegDate, frame, }  =  jpeg.fields;  


  return (
    <>
         
          <div className='max-w-[1240px] max-h-[1240px] w-full flex '> 
           <div className='m-auto' >           
            {/* <div ref={containerRef} className='container'>
             <div ref={boxRef} className='box'>  */}
               <Image 
                src= {'https:' + frame.fields.file.url }
                width={ frame.fields.file.details.image.width }
                height={ frame.fields.file.details.image.height }
                alt='draggit'   
                className='cursor-move rounded-lg hover:drop-shadow-xl' 
                draggable="true"            
                />  
              </div>
              </div>
              {/* </div>
              </div>  */}
              
             
             
            
                              
    </>
    
  )

}
