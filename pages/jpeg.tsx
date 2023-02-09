import React from 'react'
import { createClient } from 'contentful'
import JpegLayout from '../components/JpegLayout'

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
    console.log(jpegs)

  return (
    <div>
        
        {jpegs.map(jpeg => (
            <JpegLayout key={jpeg.sys.id} jpeg={jpeg}/>
        ))}
    </div>
  )
}