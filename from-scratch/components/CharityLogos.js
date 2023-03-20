import React from 'react'
import Image from 'next/image'
import styles from '../styles/CharityLogos.module.css'

export default function CharityLogos({ charity }) {
  const {logo, logoAltText} = charity.fields
  return (
    <div>
      <div className={styles.charityLogos}>
        <Image src={`https:${logo.fields.file.url}`} width={logo.fields.file.details.image.width } height={logo.fields.file.details.image.height} alt={ logoAltText } />
      </div>
          
          
    </div>
  )
}
