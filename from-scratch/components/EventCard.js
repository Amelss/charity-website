import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/EventsPage.module.css'

export default function EventCard({event}) {
  const { thumbnail, thumbnailAltTag, title, slug, location, eventDate } = event.fields
 
  
    return (
      
      <div>
          <div className={styles.events}>
              <Link href={`/whatsOn/${slug}`}>
            <Image src={`https:${thumbnail.fields.file.url}`} width={400} height={400} alt={thumbnailAltTag} className={styles.eventPicture} />
          </Link>
          <Link href={`/whatsOn/${slug}`}>
            <h3 className={styles.eventTitle}>
              {title}
            </h3>
            <p className={styles.date}>{eventDate }</p>
            <p className={styles.location}>{ location}</p>
          </Link>
            
            
          </div>

    </div>
  )
}
