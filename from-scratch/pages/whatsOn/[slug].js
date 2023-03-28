import React from 'react'
import { createClient } from "contentful";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Link from 'next/link';
import { format } from "date-fns";
import Head from "next/head";
import styles from '../../styles/EventsPage.module.css'


const client = createClient({
   space: process.env.CONTENTFUL_SPACE_ID,
   accessToken: process.env.CONTENTFUL_ACCESS_KEY,
 });

 export const getStaticPaths = async () => {
   const res = await client.getEntries({
     content_type: "events",
   });

   const paths = res.items.map(item => {
 
     return {
       params: { slug: item.fields.slug },
     };
   });
   return {
     paths,
     fallback: true,
   };
 };

 export async function getStaticProps({ params }) {
   const { items } = await client.getEntries({
     content_type: "events",
     "fields.slug": params.slug
   });

   const dateField = items[0].fields.eventDate;
   const dateObject = new Date(dateField);
   const formattedDate = format(dateObject, "dd, MMM, yyyy");

   return {
     props: {
       events: items[0],
       formattedDate

     }
  
   };
   
 }

export default function events({ events, formattedDate}) {
  if (!events) return <div>Loading...</div>;

  const {title, featuredImage, featuredImageAltTag, ticketLink, eventText, nonTicketed, location, eventDate} = events.fields
  return (
    <div>
      <Head>
        <title>{`From Scratch | ${title}`}</title>
        <meta
          name="description"
          content="A charity for children using art to express themselves"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>

      
      <div  className={styles.eventImg}>
        <Image
          src={`https:${featuredImage.fields.file.url}`}
          width={400}
          height={400}
          alt={featuredImageAltTag}
         
        />
      </div>
      <div className={styles.eventTitle}>{title}</div>
      
      <div className={styles.eventInfo}>
        <div className={styles.dateInfo }>
          <Image src={'../assets/date-icon.svg' } width={ 20} height={20 } alt={ 'date icon'} />
          <p className={styles.date}>{formattedDate}</p>
        </div>
        <div className={styles.locationInfo}>
          <Image src={'../assets/location.svg' } width={ 20} height={20 } alt={ 'date icon'} />
          <p className={styles.eventLocation}>{location}</p>
        </div>
        
      </div>
      
         <div>
          {ticketLink ? (
          

            <div className={styles.eventBtnContainer}>
              <Link href={ticketLink} target={"_blank"}>
                  <button type='button' className={styles.tickets}>
                  Get tickets
                  </button>
               </Link>
            </div>
           
             
           
          ) : (
            <span>{nonTicketed}</span>
          )}
        </div>

        <div>{documentToReactComponents(eventText)}</div>
    
      
    </div>
  );
}
