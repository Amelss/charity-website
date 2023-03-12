import React from 'react'
import Image from "next/image";
import styles from '../styles/Hero.module.css'

export default function HeroImage({heroPicture}) {
    console.log(heroPicture);
    console.log(` Hero image.fields: ${heroPicture.fields.hero.fields.file.url}`);
    console.log(heroPicture.fields.hero.fields);
    const { file, heading, subheading } = heroPicture.fields.hero.fields
    console.log(file);
    return (
        <div>
            <div className={styles.desktopImg}>
                <Image
                    src={`https:${file.url}`}
                    width={1425}
                    height={600}
                    alt={heroPicture.fields.altTag}
                    /> 
            </div>
            <div className={styles.extraLargeDtkp}>
                <Image
                    src={`https:${file.url}`}
                    width={1920}
                    height={600}
                    alt={heroPicture.fields.altTag}
                    /> 
            </div>
            <div className={styles.mobileImg}>
                <Image
                    src={`https:${file.url}`}
                    width={400}
                    height={200}
                    alt={heroPicture.fields.altTag}
                    /> 
            </div>
       
      </div>
    );
}
