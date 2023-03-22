import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function EventCard({event}) {
    const { thumbnail, thumbnailAltTag, title, slug } = event.fields
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
          </Link>
            
            
          </div>

    </div>
  )
}
