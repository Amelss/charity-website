import React from 'react'
import Head from 'next/head'
import { createClient } from "contentful";
import EventCard from '@/components/EventCard';
import styles from '../../styles/EventsPage.module.css'
import format from "date-fns/format";

 const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

export async function getStaticProps() {
 
  const res = await client.getEntries({
    content_type: "events",
    order: "sys.createdAt",
  });


    //  const dateField = res.items.map(item => item.fields.eventDate);
    //  const dateObject = new Date(dateField);
    //  const formattedDate = format(dateObject, "dd-MMM-yyyy");


  return {
    props: {
      events: res.items,
     
    },
  };
}

export default function eventsHome({ events}) {

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

      <div className={styles.eventsPageCard}>
        {events.map((event) => (
          <EventCard key={event.sys.id} event={event}/>
        ))}
      </div>

    </div>
  );
}
