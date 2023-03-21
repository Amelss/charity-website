import React from 'react'
import { createClient } from "contentful";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Link from 'next/link';



 export const client = createClient({
   space: process.env.CONTENTFUL_SPACE_ID,
   accessToken: process.env.CONTENTFUL_ACCESS_KEY,
 });

 export const getStaticPaths = async () => {
   const res = await client.getEntries({
     content_type: "events",
   });

   const paths = res.items.map((item) => {
 
     return {
       params: { slug: item.fields.slug },
     };
   });
   return {
     paths,
     fallback: false,
   };
 };

 export async function getStaticProps({ params }) {
   const { items } = await client.getEntries({
     content_type: "events",
     "fields.slug": params.slug,
   });

   return {
     props: { events: items[0] },
     revalidate: 10,
   };
   
 }

export default function events({ events }) {

  const {title, featuredImage, featuredImageAltTag, eventDate, ticketLink, eventText} = events.fields
  return (
    <div>
      <div className='eventTitle'>
        {title}
      </div>
      <div className='eventImg'>
        <Image src={`https:${featuredImage.fields.file.url}` } width={400 } height={400 } alt={featuredImageAltTag } />
      </div>
      <div className='eventInfo'>
        <h4>{eventDate}</h4>
        <p><Link href={ticketLink}>Click here for tickets</Link></p>
        <div>
          {documentToReactComponents(eventText)}
        </div>
      </div>
    </div>
  )
}
