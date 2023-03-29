import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from '../styles/BlogCard.module.css'

export default function BlogCard({ blog }) {
  const { thumbnail, thumbnailAltTag, title, excerpt, slug } = blog.fields;
  return (
      <div className={styles.blogs}>
        <Link href={`/blogs/${slug}`}>
          <div className={styles.blogCard}>
             
              
              
        <div className={styles.thumbnailImg}>
          <Image
            src={`https:${thumbnail.fields.file.url}`}
            width={400}
            height={600}
            alt={thumbnailAltTag}
          />
        </div>
       
          <div >
            <h4 className={styles.blogTitle}>{title}</h4>
        </div>
                      
          <div className={styles.blogExcerpt}>
            <p>{excerpt}</p>
          </div>
       
              </div>
        </Link>
    </div>
  );
}
