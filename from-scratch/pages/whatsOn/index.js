import React from 'react'
import Head from 'next/head'
import { createClient } from "contentful";
import EventCard from '@/components/EventCard';


 const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

export async function getStaticProps() {
 
  const res = await client.getEntries({
    content_type: "events",
  });


  return {
    props: {events: res.items,},
    revalidate: 10
  };
}

export default function eventsHome({ events }) {

  return (
    <div>
      <Head>
        <title>From Scratch | Events </title>
        <meta
          name="description"
          content="A charity for children using art to express themselves"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <div className="eventCard">
        {events.map((event) => (
          <EventCard key={event.sys.id} event={event} />
        ))}
      </div>

    </div>
  );
}
