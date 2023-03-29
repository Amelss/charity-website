import React from 'react'
import { createClient } from "contentful";
import Image from 'next/image';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Head from "next/head";
import styles from '../../styles/BlogsSlug.module.css'

 const client = createClient({
   space: process.env.CONTENTFUL_SPACE_ID,
   accessToken: process.env.CONTENTFUL_ACCESS_KEY,
 });


export const getStaticPaths = async () => {
  const res = await client.getEntries({
     content_type: 'blog'
  })
  
  const paths = res.items.map(item => {
    return {
      params: {slug: item.fields.slug}
    }
  })
  return {
    paths,
    fallback: true
  }
}
 

export async function getStaticProps({params}) {
  const {items} = await client.getEntries({
    content_type: 'blog',
    'fields.slug': params.slug
  })

  return {
    props: { blog: items[0] }
   
  }
}

export default function blogPosts({ blog }) {
  console.log(blog);
  if (!blog) return <div>Loading...</div>;
  const {title, featuredImage, featuredImageAltTag, author, blogPublishedDate, blogText, readTime} = blog.fields
  return (
    <div>
      <Head>
        <title>{`From Scratch | ${title}`}</title>
        <meta
          name="description"
          content="A charity for children using art to express themselves"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className={styles.blogPageTitle}>
        <h1>{title}</h1>
      </div>
      <div className={styles.featuredImage}>
        <Image
          src={`https:${featuredImage.fields.file.url}`}
          width={400}
          height={400}
          alt={featuredImageAltTag}
          
        />
      </div>
      <div className={styles.authorDate}>
        <h5>{author}</h5>
        <h5 className={styles.date}>{blogPublishedDate}</h5>
      </div>
      <div>
        {readTime <= 1 ? (
          <p className={styles.readTime}>Read Time: {readTime} minute</p>
        ) : (
          <p className={styles.readTime}>Read Time: {readTime} minutes </p>
        )}
      </div>

      <div className={styles.blogText}>{documentToReactComponents(blogText)}</div>
    </div>
  );
}
