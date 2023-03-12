import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { createClient } from 'contentful';
import HeroImage from '@/components/HeroImage';


export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({
    content_type: "heroImage",
  });

  return {
    props: {
      heroImage: res.items
    }
  }
}

export default function Home({heroImage}) {
console.log(heroImage);
     
  return (
    <>
      <Head>
        <title>From Scratch | Home</title>
        <meta name="description" content="A charity for children using art to express themselves" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      {heroImage.map(heroPicture => (
        <HeroImage key={heroPicture.sys.id} heroPicture={heroPicture} />
      ))}
      
      <h1>Homepage</h1>

    
    </>
  );
}
