import React from 'react'
import Image from 'next/image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import styles from '../styles/AboutUs.module.css'

export default function SessionsPage({ session }) {
    const {featuredImage, title, featuredImageAltTag, pageText} = session.fields
  return (
    <div>
      <h1 className={styles.aboutTitle}>{title}</h1>
      <div className={styles.featuredImage}>
        <Image
          src={`https:${featuredImage.fields.file.url}`}
          width={900}
          height={600}
          alt={featuredImageAltTag}
        />
      </div>
      <div className={styles.mobileFeaturedImage}>
        <Image
          src={`https:${featuredImage.fields.file.url}`}
          width={350}
          height={300}
          alt={featuredImageAltTag}
        />
      </div>
      <div className={styles.aboutUsText}>
        {documentToReactComponents(pageText)}
      </div>
    </div>
  );
}
