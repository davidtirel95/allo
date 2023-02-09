import React from 'react'
import { createClient } from 'contentful'
import JoinLayout from '../components/JoinLayout'

export async function getStaticProps() {
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    })
    const res = await client.getEntries({content_type: 'join'})
    return {
        props: {
            joins: res.items 
        }
    }
}

export default function join({joins}: any) {
    console.log(joins)

  return (
    <div>
        
        {joins.map(join => (
            <JoinLayout key={join.sys.id} join={join}/>
        ))}
    </div>
  )
}