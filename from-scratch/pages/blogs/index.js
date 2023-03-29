import React from 'react'
import { createClient } from "contentful";
import Head from "next/head";
import BlogCard from '@/components/BlogCard';
import styles from '../../styles/BlogCard.module.css'


export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({
    content_type: "blog",
    order: "-sys.createdAt",
  });

  return {
    props: { blogs: res.items }
    
  }
}



export default function blogsHome({ blogs }) {
  return (
    <div>
      <Head>
        <title>From Scratch | Our Blog </title>
        <meta name="description" content="A charity for children using art to express themselves" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className={styles.blogs}>
        {blogs.map(blog => (
        <BlogCard key={blog.sys.id} blog={blog} />
      ))}
      </div>
      

    </div>
  )
}
