import React from 'react'
import { createClient } from 'contentful'
import NewsLayout from '../components/NewsLayout'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export async function getStaticProps() {
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    })


   const res = await client.getEntries({content_type: 'news'})
    return {
        props: {
            newss: res.items,    
            
        }
    } 
}
export default function news({newss}: any) {
    console.log(newss)

  return (
    <>
    <Navbar />
    <div>
    <div>
        <h2 className= 'w-full pt-20 pb-20 text-center tracking-widest'>news</h2> 
        </div>
        {newss.map(news => (
            <NewsLayout key={news.sys.id} news={news}  />
        ))}
    <Footer />
    </div>
    </>
  )
}
