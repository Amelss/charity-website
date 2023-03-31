import React from 'react'
import Image from "next/image";
import Link from "next/link";
import styles from '../styles/ErrorPage.module.css'

export default function ErrorPage({ page }) {
    const {heading, subheading, featuredImage, featuredImageAltTag} = page.fields
  return (
    <div>
      <h1 className={styles.heading}>{heading}</h1>
          <h3 className={styles.subheading}>{subheading}</h3>
          <div className={styles.dskpFeaturedImage}>
                 <Image
        src={`https:${featuredImage.fields.file.url}`}
        width={800}
        height={500}
        alt={featuredImageAltTag}
        
      />
          </div>
   
      <Image
        src={`https:${featuredImage.fields.file.url}`}
        width={350}
        height={200}
        alt={featuredImageAltTag}
        className={styles.mobileFeaturedImage}
          />
          <div className={styles.btnContainer}>
             <Link href={`/`}>
             <button className={styles.homeBtn}>Return Home</button> 
          </Link> 
          </div>
          
          
    </div>
  );
}
