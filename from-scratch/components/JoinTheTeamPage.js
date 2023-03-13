import React from 'react'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from 'next/image';


export default function JoinTheTeamPage({ join }) {
    const { featuredImage, title, pageText, featuredImageAltTag } = join.fields
  return (
      <div>
      <h1>{title}</h1>
      <div className="featuredImage">
        <Image
          src={`https:${featuredImage.fields.file.url}`}
          width={600}
          height={400}
          alt={featuredImageAltTag}
        />
      </div>
      <div className="aboutUsText">{documentToReactComponents(pageText)}</div>
    </div>
  );
}
