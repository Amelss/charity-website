import React from 'react'
import { createClient } from "contentful";
import JoinTheTeamPage from '@/components/JoinTheTeamPage';
import Head from 'next/head';


export async function getStaticProps() {
const client = createClient ({
     space: process.env.CONTENTFUL_SPACE_ID,
     accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    })
   
    const res = await client.getEntries({
      content_type: "joinTheTeam",
    });

    return {
        props: { joinTheTeam: res.items },
        revalidate: 10
    }
}

export default function join({joinTheTeam}) {

  return (
      <div>
           <Head>
        <title>From Scratch | Join The Team</title>
        <meta name="description" content="A charity for children using art to express themselves" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
          {joinTheTeam.map(join => (
              <JoinTheTeamPage key={join.sys.id} join={join} />
          ))}
          
    </div>
  )
}
