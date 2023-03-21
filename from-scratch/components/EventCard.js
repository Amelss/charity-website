import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function EventCard({event}) {
    const { thumbnail, thumbnailAltTag, title, eventDate, slug } = event.fields
    console.log(slug);
    return (
      
      <div>
          <div className='events'>
              <Link href={`/whatson/${slug}`}>
             
                <div className='eventTitle'>
              {title}
          </div>
          <div className='eventPicture'>
              <Image src={`https:${thumbnail.fields.file.url}` } width={400 } height={400 } alt={thumbnailAltTag } />
          </div>
          <div>
              {eventDate}
                  </div>
              </Link>
          </div>
        
        
          
    </div>
  )
}
