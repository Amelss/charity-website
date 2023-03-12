import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { createClient } from 'contentful';
import HeroImage from '@/components/HeroImage';
import Blurb from '@/components/Blurb';



export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });
  const res = await client.getEntries({
    content_type: "heroImage",
  });

   const blurb = await client.getEntries({
     content_type: "introBlurb",
   });

  return {
    props: {
      heroImage: res.items,
      introBlurb: blurb.items
    },
    revalidate: 10,
  }
}




export default function Home({ heroImage, introBlurb }) {
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
      {introBlurb.map(intro => (
        <Blurb key={intro.sys.id } intro={intro} />
      ))}
    </>
  );
}
