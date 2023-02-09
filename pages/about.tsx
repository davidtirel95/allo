import React from 'react'
import { createClient } from 'contentful'
import AboutLayout from '../components/AboutLayout'

export async function getStaticProps() {
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    })
    const res = await client.getEntries({content_type: 'page'})
    return {
        props: {
            pages: res.items 
        }
    }
}

export default function about({pages}: any) {
    console.log(pages)

  return (
    <div>
        
        {pages.map((page: { sys: { id: React.Key | null | undefined } }) => (
            <AboutLayout key={page.sys.id} page={page}/>
        ))}
    </div>
  )
}
