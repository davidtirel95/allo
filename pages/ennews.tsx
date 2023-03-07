import React from 'react'
import { createClient } from 'contentful'
import EnNewsLayout from '../components/EnNewsLayout'
import EnNavbar from '../components/EnNavbar'
import Footer from '@/components/Footer'

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
         <EnNavbar />
         <div>
        <h2 className= 'w-full pt-20 pb-20 text-center tracking-widest'>news</h2> 
        </div>
        {ennewss.map(enNews => (
            <EnNewsLayout key={enNews.sys.id} enNews={enNews}/>
        ))}
        <Footer />
    </div>
  )
}
