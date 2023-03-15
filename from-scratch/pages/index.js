import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { createClient } from 'contentful';
import HeroImage from '@/components/HeroImage';
import Blurb from '@/components/Blurb';
import Link from 'next/link';



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
  
  const about = await client.getEntries({
    content_type: 'aboutUs'
  })

  const session = await client.getEntries({
    content_type: 'sessions'
  })

  const joinUs = await client.getEntries({
    content_type: "joinTheTeam",
  });

  return {
    props: {
      heroImage: res.items,
      introBlurb: blurb.items,
      aboutUs: about.items,
      sessions: session.items,
      joinTheTeam: joinUs.items
    },
    revalidate: 10,
  }
}


export default function Home({ heroImage, introBlurb, aboutUs, sessions, joinTheTeam }) {
  return (
    <div>
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


      <div className={styles.services}>
        {aboutUs.map(abouttile => (
          <Link href={'/about'}>
            <div key={abouttile.sys.id} abouttile={abouttile}>
              <div className={styles.desktopTileImg}>
                <Image src={`https:${abouttile.fields.thumbnail.fields.file.url}`} width={400} height={400} alt={abouttile.fields.thumbnailAltTag} />
              </div>
              <div className={styles.mobileTileImg}>
              <Image src={`https:${abouttile.fields.thumbnail.fields.file.url}`} width={350} height={350} alt={abouttile.fields.thumbnailAltTag} />
              </div>
            <h2 className={styles.titleText}>{abouttile.fields.title }</h2>
          </div>
          </Link>
        ))}

        {sessions.map(sessiontile => (
          <div key={sessiontile.sys.id} sessiontile={sessiontile}>
            <Link href={'/sessions'}>
              <div className={styles.desktopTileImg}>
                <Image src={`https:${sessiontile.fields.thumbnail.fields.file.url}` } width={400 } height={400 } alt={sessiontile.fields.thumbnailAltTag } />
              </div>
              <div className={styles.mobileTileImg}>
                 <Image src={`https:${sessiontile.fields.thumbnail.fields.file.url}` } width={350 } height={350 } alt={sessiontile.fields.thumbnailAltTag } />
              </div>
              <h2 className={styles.titleText}>{ sessiontile.fields.title}</h2>
            </Link>
            
          </div>
        ))}

        {joinTheTeam.map(jointile => (
          <div key={jointile.sys.id} jointile={jointile }>
            <Link href={'/join'}>
              <div className={styles.desktopTileImg}>
                <Image src={`https:${jointile.fields.thumbnail.fields.file.url}` } width={400 } height={400 } alt={jointile.fields.thumbnailAltTag } />
              </div>
              <div className={styles.mobileTileImg}>
                 <Image src={`https:${jointile.fields.thumbnail.fields.file.url}` } width={350 } height={350 } alt={jointile.fields.thumbnailAltTag } />
              </div>
              <h2 className={styles.titleText}>{ jointile.fields.title}</h2>
            </Link>
          </div>
        ))}
      </div>

    </div>
  );
}
