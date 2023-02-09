import React from 'react'
import { createClient } from 'contentful'
import EnAboutLayout from '../components/EnAboutLayout'

export async function getStaticProps() {
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    })
    const res = await client.getEntries({content_type: 'enAbout'})
    return {
        props: {
            enAbouts: res.items 
        }
    }
}

export default function enAbout({enAbouts}:any) {
    console.log(enAbouts)
  return (
    <div>
          {enAbouts.map(enAbout => (
            <EnAboutLayout key={enAbout.sys.id} enAbout={enAbout} />
        ))}
    </div>
  )
}
