import React from 'react'
import Image from 'next/image'
import styles from '../styles/JoinTheTeam.module.css'

export default function TeamMemberCard({ member }) {
    const { teamMemberPhoto, teamMemberPhotoAltTag, teamMemberName, jobTitle } = member.fields

  return (
      <div>
          <div className={styles.theTeam}>
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
                    width={160}
                    height={160}
                    alt={teamMemberPhotoAltTag}
                      className={styles.mobileTeamMemberFeaturedImage}
                  />
                  <h4 className={styles.teamMemberName}>{teamMemberName}</h4>
                  <h4 className={styles.jobTitle}>{jobTitle }</h4>
              </div>
          </div>
              
          
    </div>
  )
}
