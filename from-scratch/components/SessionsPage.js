import React from 'react'
import Image from 'next/image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

export default function SessionsPage({ session }) {
    const {featuredImage, title, featuredImageAltTag, pageText} = session.fields
  return (
      <div>
          <h1>{title }</h1>
          <div className='featuredImage'>
              <Image src={`https:${featuredImage.fields.file.url}` } width={600 } height={400} alt={featuredImageAltTag} />
          </div>
          <div className='sessionsPageText'>
              {documentToReactComponents(pageText)}
          </div>
    </div>
  )
}
