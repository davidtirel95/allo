import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { formatRelativeDateTime } from '@contentful/f36-datetime'

export default function NewsLayout({ news }) {
    
  const { newsContentTitle, newsDate, newsContent } =  news.fields
  
if (typeof window ==! "undefined") { 

}

  
  return (
    <>
  <div className='flex mx-auto justify-center items-center'>
       
               
                <div className="border-2 rounded border-black p-0.5 mb-10">
                <h2 className="tracking-widest" >{ newsContentTitle }</h2>
                <div>
                    { formatRelativeDateTime(newsDate) }
                <div className="font-Baskervvol-Base">
                    { documentToReactComponents(newsContent) }
                  </div>
                </div> 
                </div>
                </div>
                
               
               
    </>
  )
}

