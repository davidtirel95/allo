import React from 'react'
import { createClient } from 'contentful'
import ContactLayout from '../components/ContactLayout'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export async function getStaticProps() {
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    })
    const res = await client.getEntries({content_type: 'contact'})
    return {
        props: {
            contacts: res.items 
        }
    }
}

export default function contact ({contacts}: any) {
    console.log(contacts)

  return (
    <div>
        <Navbar />
        <div>
        <h2 className= 'w-full pt-20 pb-20 text-center tracking-widest'>contact</h2> 
        </div>
        {contacts.map(contact => (
            <ContactLayout key={contact.sys.id} contact={contact}/>
        ))}
        <Footer />
    </div>
  )
}