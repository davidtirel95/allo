import React from 'react'
import { createClient } from 'contentful'
import EnContactLayout from '../components/EnContactLayout'

export async function getStaticProps() {
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    })
    const res = await client.getEntries({content_type: 'enContact'})
    return {
        props: {
            encontacts: res.items 
        }
    }
}

export default function encontact ({encontacts}: any) {
    console.log(encontacts)

  return (
    <div>
        
        {encontacts.map(enContact => (
            <EnContactLayout key={enContact.sys.id} enContact={enContact}/>
        ))}
    </div>
  )
}