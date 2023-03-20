import React from 'react'
import Image from 'next/image';
import styles from '../styles/Newsletter.module.css'

export default function NewsletterSection({news}) {
   const { newsletterThumbnail, newsletterThumbnailAltTag } = news.fields;
   return (
       <div className={styles.newsletter}>
        
           <div className={styles.newsletterImages}>
               
           <Image
             src={`https:${newsletterThumbnail.fields.file.url}`}
             width={500}
             height={500}
             alt={newsletterThumbnailAltTag}
             className={styles.dskImage}
           />
           <Image
             src={`https:${newsletterThumbnail.fields.file.url}`}
             width={370}
             height={360}
             alt={newsletterThumbnailAltTag} 
             className={styles.mobileImage}
           />
    
       </div>

       <div className={styles.newsletterForm}>
               <form action="newsletter" >
                   <h1 className={styles.newsletterTitle }>Sign up to our newsletter!</h1>
                   <div className={styles.inputOptions}>
                        <label htmlFor="firstName" className={styles.inputsLabel}>First Name</label>
                        <input type="text" name="firstName" className={styles.inputs}/>
                        <label htmlFor="lastName" className={styles.inputsLabel}>Last Name</label>
                        <input type="text" name="lastName" className={styles.inputs}/>
                        <label htmlFor="email" className={styles.inputsLabel}>Email</label>
                        <input type="email" name="email" className={styles.inputs}/>
                   </div>

                   <div className={styles.submitBtn}>
                       <button type='button' className={styles.button}>SUBMIT</button>
                   </div>
                    
         </form>
       </div>
     </div>
   );
}
