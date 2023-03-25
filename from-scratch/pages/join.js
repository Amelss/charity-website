import React from 'react'
import { createClient } from "contentful";
import JoinTheTeamPage from '@/components/JoinTheTeamPage';
import Head from 'next/head';
import TeamMemberCard from '@/components/TeamMemberCard';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from 'next/image';
import styles from "../styles/JoinTheTeam.module.css";
import Link from 'next/link';


const client = createClient ({
     space: process.env.CONTENTFUL_SPACE_ID,
     accessToken: process.env.CONTENTFUL_ACCESS_KEY,
})
    

export async function getStaticProps() {

   
    const res = await client.getEntries({
      content_type: "joinTheTeam",
    });

  const team = await client.getEntries({
    content_type: 'teamMembers',
    order: 'sys.createdAt'
  
  });

    return {
      props: {
        joinTheTeam: res.items,
        teamMembers: team.items}
       
    }
}

export default function join({joinTheTeam, teamMembers}) {

  return (
    <div>
      <Head>
        <title>From Scratch | Join The Team</title>
        <meta
          name="description"
          content="A charity for children using art to express themselves"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      {joinTheTeam.map((join) => (
        <div key={join.sys.id}>
          <JoinTheTeamPage join={join} />
        </div>
      ))}
      <h2 className={styles.pageTitles}>Meet The Team</h2>
      <div className={styles.teamMembers}>
        {teamMembers.map((member) => (
          <TeamMemberCard key={member.sys.id} member={member} />
        ))}
      </div>

      <h2 className={styles.pageTitles}>How to Join </h2>
      {joinTheTeam.map((volunteer) => (
        <div key={volunteer.sys.id} volunteer={volunteer}>
          <Image
            src={`https:${volunteer.fields.volunteersPhoto.fields.file.url}`}
            width={400}
            height={300}
            alt={volunteer.fields.volunteersPhotoAltTag}
            className={styles.mobileVolunteersPhoto}
          />

          <Image
            src={`https:${volunteer.fields.volunteersPhoto.fields.file.url}`}
            width={900}
            height={600}
            alt={volunteer.fields.volunteersPhotoAltTag}
            className={styles.dktpVolunteerPhoto}
          />
          <p className={styles.photoDesc}>{volunteer.fields.volunteersPhotoDescription}</p>
          <div className={styles.joinText}>
            {documentToReactComponents(volunteer.fields.howToJoinText)}
          </div>
        </div>
      ))}
      <div className={styles.btnContainer}>
        <Link href={'https://www.gov.uk/government/get-involved/take-part/volunteer'} target={'_blank'}>
          <button type='button' className={styles.joinBtn}>Join Today</button>
        </Link>
          
      </div>
      
    </div>
  );
}
