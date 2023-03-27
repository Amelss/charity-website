import React from 'react'
import { createClient } from "contentful";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Link from 'next/link';
import { format } from "date-fns";



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
   const formattedDate = format(dateObject, "dd-MM-yyyy");

   return {
     props: {
       events: items[0],
      formattedDate }
  
   };
   
 }

export default function events({ events , formattedDate}) {
  console.log(events);
  if (!events) return <div>Loading...</div>;

  const {title, featuredImage, featuredImageAltTag, ticketLink, eventText, nonTicketed, eventDate} = events.fields
  return (
    <div>
      <div className='eventTitle'>
        {title}
      </div>
      <div className='eventImg'>
        <Image src={`https:${featuredImage.fields.file.url}` } width={400 } height={400 } alt={featuredImageAltTag } />
      </div>
      <p>{ formattedDate}</p>
      <div className='eventInfo'>
  
        <p>
          
          {ticketLink ? <Link href={ticketLink} target={"_blank"}>Click here for tickets</Link> : <span>{nonTicketed }</span>  }
          
        </p>
        <div>
          {documentToReactComponents(eventText)}
        </div>
      </div>
    </div>
  )
}
