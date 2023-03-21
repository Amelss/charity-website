import React from 'react'
import { createClient } from "contentful";
import Image from 'next/image';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

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
    fallback: false
  }
}
 

export async function getStaticProps({params}) {
  const {items} = await client.getEntries({
    content_type: 'blog',
    'fields.slug': params.slug
  })
console.log(params.slug);
  return {
    props: { blog: items[0] },
    revalidate: 10
  }
}

export default function blogPosts({ blog }) {
  const {title, featuredImage, featuredImageAltTag, author, blogPublishedDate, blogText, readTime} = blog.fields
  return (
    <div>
      <div className='blogPageTitle'>
        <h1>{title }</h1>
      </div>
      <div className="featuredImage">
        <Image src={`https:${featuredImage.fields.file.url}` } width={ 300} height={300 } alt={featuredImageAltTag } />
      </div>
      <div className='AuthorDate'>
        <h5>{author}</h5>
        <h5>{blogPublishedDate }</h5>
      </div>
      <div className='readTime'>
        {readTime}
        

      </div>
      <div className='blogText'>
        {documentToReactComponents(blogText)}
      </div>
      

    </div>
  )
}
