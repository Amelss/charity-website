import React from 'react'
import Image from 'next/image'
import styles from '../styles/JoinTheTeam.module.css'

export default function TeamMemberCard({ member }) {
    const {teamMemberPhoto, teamMemberPhotoAltTag, teamMemberName, jobTitle } = member.fields
  return (
      <div>
          <div className={styles.teamMembers}>
              <div className={styles.teamMemberCards}>
                  <Image
                    src={`https:${teamMemberPhoto.fields.file.url}`}
                    width={300}
                    height={300}
                    alt={teamMemberPhotoAltTag}
                      className={styles.teamMemberFeaturedImage}
                  />
                  <Image
                    src={`https:${teamMemberPhoto.fields.file.url}`}
                    width={140}
                    height={140}
                    alt={teamMemberPhotoAltTag}
                      className={styles.mobileTeamMemberFeaturedImage}
                  />
                  <h4>{teamMemberName}</h4>
                  <p>{jobTitle }</p>
              </div>
            
          </div>
         
          
    </div>
  )
}
