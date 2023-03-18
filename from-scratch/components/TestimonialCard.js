import React from 'react'
import Image from 'next/image'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import styles from '../styles/Testimonials.module.css'

export default function TestimonialCard({ quote }) {
  const {testimonialTitle, featuredImage, featuredImageAltTag, testimonialText, clientName } = quote.fields
  return (
    <div>
      <div className={styles.testimonialCard}>
        <div className={styles.testimonialTitle}>
          <h3>{testimonialTitle}</h3>
        </div>
        <div className={styles.testimonial}>
          <div >
            <div className={styles.mobileTestimonialImage}>
              <Image src={`https:${featuredImage.fields.file.url}`} width={200} height={200} alt={featuredImageAltTag} />
            </div>
            
            <div className={styles.testimonialImage}>
              <Image src={`https:${featuredImage.fields.file.url}`} width={400} height={400} alt={featuredImageAltTag} />
            </div>
          </div>
          <div className={styles.testimonialText}>
            <div>{documentToReactComponents(testimonialText)}</div>
            <p className={styles.clientName}>{clientName }</p>
          </div>
        </div>
      </div>
     
          
    </div>
  )
}
