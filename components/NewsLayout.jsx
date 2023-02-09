import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { formatRelativeDateTime } from '@contentful/f36-datetime'
import Navbar from './Navbar'

export default function NewsLayout({ news }) {
    
  const { newsContentTitle, newsDate, newsContent } =  news.fields
    
  return (
    <>
   
    <div className="flex justify-center items-center pt-4 pl">
                
                <div className=" border-2 rounded border-black p-0.5">
                    <h3>
                        { newsContentTitle }
                    </h3>
                   
                    <div>
                       { formatRelativeDateTime(newsDate) }
                    
                 
           
                <div className="font-Baskervvol-Base">
                    {documentToReactComponents(newsContent)}
                </div>
                </div>
                </div>              
                </div>
    </>
  )
}
