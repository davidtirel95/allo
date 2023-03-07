import React from 'react'
import { createClient } from 'contentful'
import EnAboutLayout from '../components/EnAboutLayout'
import EnNavbar from '../components/EnNavbar'
import Footer from '@/components/Footer'

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
        <EnNavbar />
        <div>
        <h2 className= 'w-full pt-20 pb-20 text-center tracking-widest'>about</h2> 
        </div>
          {enAbouts.map(enAbout => (
            <EnAboutLayout key={enAbout.sys.id} enAbout={enAbout} />
        ))}
        <Footer />
    </div>
  )
}
