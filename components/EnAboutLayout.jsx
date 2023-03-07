import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'



export default function EnAboutLayout({ enAbout }) {

 const { AboutPageTitle, AboutDescription } =  enAbout.fields

  return (
    <>

    
    <div className='w-full h-screen text-center'>
        <div className='max-w-[1240px] max-h-[1240px] w-full flex mx-auto'>
          <div className='max-w-[50%] max-h-[50%] m-auto'>
        <div className='leading-8'>
            {documentToReactComponents(AboutDescription)}
          </div>
        </div>
        </div>
        </div>
    </>
  )
}
