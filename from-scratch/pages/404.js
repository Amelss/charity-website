import React from 'react'
import { createClient } from "contentful";
import ErrorPage from '@/components/ErrorPage';
import Head from "next/head";


const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export async function getStaticProps() {
        const res = await client.getEntries({
        content_type: "errorPage",
        });
    
     return {
       props: { errorPage: res.items },
     };
}

export default function NotFound({errorPage}) {
  return (
    <div>
      <Head>
        <title>From Scratch | Error 404</title>
        <meta
          name="description"
          content="A charity for children using art to express themselves"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      {errorPage.map((page) => (
        <ErrorPage key={page.sys.id} page={page} />
      ))}
    </div>
  );
}
