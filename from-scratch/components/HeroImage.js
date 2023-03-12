import React from 'react'
import Image from "next/image";
import styles from '../styles/Hero.module.css'

export default function HeroImage({ heroPicture }) {
    const { file} = heroPicture.fields.hero.fields
    return (
      <div>
        <div className={styles.desktopImg}>
          <Image
            src={`https:${file.url}`}
            width={1425}
            height={600}
            alt={heroPicture.fields.altTag}
                />
                <div className={styles.imageText}>
                    <h1 className={styles.imageHeading}>{heroPicture.fields.heading}</h1>
                    <h4 className={styles.imageSubHeading}>{heroPicture.fields.subheading}</h4>
                </div>
          
        </div>
        <div className={styles.extraLargeDtkp}>
          <Image
            src={`https:${file.url}`}
            width={1920}
            height={600}
            alt={heroPicture.fields.altTag}
                />
                <div className={styles.imageText}>
                    <h1 className={styles.imageHeading}>{heroPicture.fields.heading}</h1>
                    <h4 className={styles.imageSubHeading}>{heroPicture.fields.subheading}</h4>
                </div>
        </div>
        <div className={styles.mobileImg}>
          <Image
            src={`https:${file.url}`}
            width={400}
            height={200}
            alt={heroPicture.fields.altTag}
                />
                <div className={styles.imageText}>
                    <h1 className={styles.imageHeading}>{heroPicture.fields.heading}</h1>
                    <h4 className={styles.imageSubHeading}>{heroPicture.fields.subheading}</h4>
                </div>
        </div>
      </div>
    );
}
