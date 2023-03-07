import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { formatRelativeDateTime } from '@contentful/f36-datetime'


export default function NewsLayout({ enNews }) {
    
  const { enNewsContent, enNewsDate, enNewsDesc } =  enNews.fields
    
  return (
    <>
   
   <div className='w-full h-screen text-center'>
        {/* <div className=' max-w-[1240px] w-full h-full flex mx-auto pt-20 '> */}
        {/* <div className='pt-30 max-w-[50%] m-auto'> */}
        <div className='max-w-[1240px] max-h-[1240px] w-full flex mx-auto'>
          <div className='max-w-[50%] max-h-[50%] m-auto'>
           <div className="w-full flex mx-auto justify-center items-center"> 
              <div className=" border-2 rounded border-black p-0.5">
                <h2 className='tracking-widest'>{ enNewsContent }</h2>
                <div>
                    { formatRelativeDateTime(enNewsDate) }
                <div className="font-Baskervvol-Base">
                    {documentToReactComponents(enNewsDesc)}
                </div>
                </div>
                </div>              
                </div>
                </div>
                </div>              
                </div>
    </>
  )
}
