import React from 'react'
import Image from 'next/image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import styles from '../styles/AboutUs.module.css'


export default function AboutPage({ about }) {
  const { featuredImage, title, pageText, featuredImageAltTag, aboutUsImage1, aboutUsImage2, aboutUsImage1AltTag, aboutUsImage2AltTag, tagLine } = about.fields
  return (
    <div>
      <h1 className={styles.aboutTitle}>{title }</h1>
      <div className={styles.featuredImage}>
        <Image src={`https:${featuredImage.fields.file.url}`} width={900} height={600} alt={featuredImageAltTag } />
      </div>
      <div className={styles.mobileFeaturedImage}>
        <Image src={`https:${featuredImage.fields.file.url}`} width={350} height={300} alt={featuredImageAltTag } />
      </div>
      <h1 className={styles.aboutTagline}>{tagLine}</h1>
      <div className={styles.aboutUsText}>
      {documentToReactComponents(pageText)}
      </div>
      <div className={styles.bottomImages}>
        <div className={styles.image1}>
          <Image src={`https:${aboutUsImage1.fields.file.url}`} width={500} height={400} alt={aboutUsImage1AltTag } />
        </div>
        <div className={styles.image2}>
          <Image src={`https:${aboutUsImage2.fields.file.url}`} width={500} height={400} alt={aboutUsImage2AltTag } />
        </div>
      </div>
       <div className={styles.mobileBottomImages}>
        <div className={styles.image1}>
          <Image src={`https:${aboutUsImage1.fields.file.url}`} width={350} height={300} alt={aboutUsImage1AltTag } />
        </div>
        <div className={styles.image2}>
          <Image src={`https:${aboutUsImage2.fields.file.url}`} width={350} height={300} alt={aboutUsImage2AltTag } />
        </div>
      </div>
          
      </div>
  )
}
