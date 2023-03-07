import React from 'react'
import { createClient } from 'contentful'
import EnJoinLayout from '../components/EnJoinLayout'
import EnNavbar from '../components/EnNavbar'
import Footer from '@/components/Footer'

export async function getStaticProps() {
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    })
    const res = await client.getEntries({content_type: 'enJoinPageTitle'})
    return {
        props: {
            enjoins: res.items 
        }
    }
}

export default function enjoin ({enjoins}: any) {
    console.log(enjoins)

  return (
    <div>
        <EnNavbar />  
        {enjoins.map(enJoinPageTitle => (
            <EnJoinLayout key={enJoinPageTitle.sys.id} enJoinPageTitle={enJoinPageTitle}/>
        ))}
        <Footer />
    </div>
  )
}