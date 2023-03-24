import React from 'react'
import { createClient } from "contentful";
import JoinTheTeamPage from '@/components/JoinTheTeamPage';
import Head from 'next/head';
import TeamMemberCard from '@/components/TeamMemberCard';



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

      {teamMembers.map((member) => (
        <TeamMemberCard key={member.sys.id} member={member} />
      ))}

    
    </div>
  );
}
