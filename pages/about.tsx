import React from 'react'
import { createClient } from 'contentful'
import AboutLayout from '../components/AboutLayout'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
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
        <Navbar />
        <div>
        <h2 className= 'w-full pt-20 pb-20 text-center tracking-widest'>about</h2> 
        </div>
        {pages.map(page => (
            <AboutLayout key={page.sys.id} page={page}/>
        ))}
        <Footer />
    </div>
  )
}
