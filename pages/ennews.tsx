import React from 'react'
import { createClient } from 'contentful'
import EnNewsLayout from '../components/EnNewsLayout'

export async function getStaticProps() {
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    })
    const res = await client.getEntries({content_type: 'enNews'})
    return {
        props: {
            ennewss: res.items 
        }
    }
}

export default function enNews({ennewss}: any) {
    console.log(ennewss)

  return (
    <div>
        
        {ennewss.map(enNews => (
            <EnNewsLayout key={enNews.sys.id} enNews={enNews}/>
        ))}
    </div>
  )
}
