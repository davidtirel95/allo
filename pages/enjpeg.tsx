import React from 'react'
import { createClient } from 'contentful'
import EnJpegLayout from '../components/EnJpegLayout'
import EnNavbar from '@/components/EnNavbar'
import Footer from '@/components/Footer'
import interact from 'interactjs'

export async function getStaticProps() {
  
    const client = createClient({
      
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    })
    const res = await client.getEntries({content_type: 'jpeg'})
    return {
        props: {
          jpegs: res.items 
        }
        
    }
}

export default function jpeg({jpegs}: any) {
  let ctr = jpegs.length
  let index;
  let temp;
  while (ctr > 0) {
    index = Math.floor(Math.random() * ctr); 
    ctr--;
    temp = jpegs[ctr];
    jpegs[ctr]= jpegs[index];
    jpegs[index] = temp; 
    console.log(jpegs) 
  }

  return (
    <>
    <EnNavbar />
    <div>
        <div>
        <h2 className= 'w-full pt-20 pb-20 text-center tracking-widest'>jpeg</h2> 
        </div>
        <div className='grid xs:grid-cols-3 xl:gap-x-3 gap-y-3 px-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3'>
            {jpegs.map(jpeg => (
            <EnJpegLayout key={jpeg.sys.id} jpeg={jpeg} />
        ))}
        </div>
        
    <Footer />
    </div>
    </>
  )
}
