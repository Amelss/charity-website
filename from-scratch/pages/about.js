import React from 'react'
import { createClient } from "contentful";
import AboutPage from '@/components/AboutPage';
import Head from 'next/head';

export async function getStaticProps() {
   const client = createClient({
     space: process.env.CONTENTFUL_SPACE_ID,
     accessToken: process.env.CONTENTFUL_ACCESS_KEY,
   });
  
  const res = await client.getEntries({
    content_type: "aboutUs",
  });

  return {
    props: { aboutUs: res.items }
   
  }
}

export default function about({ aboutUs }) {
  return (
    <div>
       <Head>
        <title>From Scratch | About Us</title>
        <meta name="description" content="A charity for children using art to express themselves" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      {aboutUs.map(about => (
        <AboutPage key={about.sys.id} about={about} />
      ))}

    </div>
  )
}
