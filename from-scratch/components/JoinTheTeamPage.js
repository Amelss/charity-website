import React from 'react'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from 'next/image';
import styles from '../styles/JoinTheTeam.module.css'


export default function JoinTheTeamPage({ join, member }) {
  console.log(member);
  const { featuredImage, title, pageText, featuredImageAltTag } = join.fields
  
  return (
      <div>
      <h1 className={styles.joinTitle}>{title}</h1>

        <Image
          src={`https:${featuredImage.fields.file.url}`}
          width={900}
          height={600}
          alt={featuredImageAltTag}
        className={styles.joinFeaturedImage} />
      
        <Image
          src={`https:${featuredImage.fields.file.url}`}
          width={400}
          height={300}
          alt={featuredImageAltTag}
        className={styles.mobileJoinFeaturedImage} />
      
      <h1></h1>

      <div>
      
      </div>
     
      <div className={styles.joinText}>{documentToReactComponents(pageText)}</div>
    </div>
  );
}
