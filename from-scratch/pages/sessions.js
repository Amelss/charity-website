import React from 'react'
import { createClient } from "contentful";
import SessionsPage from '@/components/SessionsPage';
import Head from 'next/head';

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({
    content_type: "sessions",
  });

  return {
    props: { sessions: res.items }
  
  }
}


export default function sessions({ sessions }) {
  return (
    <div>
       <Head>
        <title>From Scratch | Our Sessions</title>
        <meta name="description" content="A charity for children using art to express themselves" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      {sessions.map(session => (
        <SessionsPage key={session.sys.id} session={session} />
      ))}

    </div>
  )
}
