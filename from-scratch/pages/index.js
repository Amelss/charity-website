import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { createClient } from "contentful";
import HeroImage from "@/components/HeroImage";
import Blurb from "@/components/Blurb";
import Link from "next/link";
import Slider from "@/components/Slider";
import EventCard from "@/components/EventCard";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });
  const res = await client.getEntries({
    content_type: "heroImage",
  });

  const blurb = await client.getEntries({
    content_type: "introBlurb",
  });

  const about = await client.getEntries({
    content_type: "aboutUs",
  });

  const session = await client.getEntries({
    content_type: "sessions",
  });

  const joinUs = await client.getEntries({
    content_type: "joinTheTeam",
  });

  const blogs = await client.getEntries({
    content_type: "blog",
  });

  const event = await client.getEntries({
    content_type: 'events'
  })

  return {
    props: {
      heroImage: res.items,
      introBlurb: blurb.items,
      aboutUs: about.items,
      sessions: session.items,
      joinTheTeam: joinUs.items,
      blog: blogs.items,
      events: event.items
    },
    revalidate: 10,
  };
}

export default function Home({
  heroImage,
  introBlurb,
  aboutUs,
  sessions,
  joinTheTeam,
  blog,
  events
}) {


  return (
    <div>
      <Head>
        <title>From Scratch | Home</title>
        <meta
          name="description"
          content="A charity for children using art to express themselves"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      {heroImage.map((heroPicture) => (
        <HeroImage key={heroPicture.sys.id} heroPicture={heroPicture} />
      ))}
      {introBlurb.map((intro) => (
        <Blurb key={intro.sys.id} intro={intro} />
      ))}

      <div className={styles.services}>
        {aboutUs.map((abouttile) => (
          <Link href={"/about"}>
            <div key={abouttile.sys.id} abouttile={abouttile}>
              <div className={styles.desktopTileImg}>
                <Image
                  src={`https:${abouttile.fields.thumbnail.fields.file.url}`}
                  width={400}
                  height={400}
                  alt={abouttile.fields.thumbnailAltTag}
                />
              </div>
              <div className={styles.mobileTileImg}>
                <Image
                  src={`https:${abouttile.fields.thumbnail.fields.file.url}`}
                  width={350}
                  height={350}
                  alt={abouttile.fields.thumbnailAltTag}
                />
              </div>
              <h2 className={styles.titleText}>{abouttile.fields.title}</h2>
            </div>
          </Link>
        ))}

        {sessions.map((sessiontile) => (
          <div key={sessiontile.sys.id} sessiontile={sessiontile}>
            <Link href={"/sessions"}>
              <div className={styles.desktopTileImg}>
                <Image
                  src={`https:${sessiontile.fields.thumbnail.fields.file.url}`}
                  width={400}
                  height={400}
                  alt={sessiontile.fields.thumbnailAltTag}
                />
              </div>
              <div className={styles.mobileTileImg}>
                <Image
                  src={`https:${sessiontile.fields.thumbnail.fields.file.url}`}
                  width={350}
                  height={350}
                  alt={sessiontile.fields.thumbnailAltTag}
                />
              </div>
              <h2 className={styles.titleText}>{sessiontile.fields.title}</h2>
            </Link>
          </div>
        ))}

        {joinTheTeam.map((jointile) => (
          <div key={jointile.sys.id} jointile={jointile}>
            <Link href={"/join"}>
              <div className={styles.desktopTileImg}>
                <Image
                  src={`https:${jointile.fields.thumbnail.fields.file.url}`}
                  width={400}
                  height={400}
                  alt={jointile.fields.thumbnailAltTag}
                />
              </div>
              <div className={styles.mobileTileImg}>
                <Image
                  src={`https:${jointile.fields.thumbnail.fields.file.url}`}
                  width={350}
                  height={350}
                  alt={jointile.fields.thumbnailAltTag}
                />
              </div>
              <h2 className={styles.titleText}>{jointile.fields.title}</h2>
            </Link>
          </div>
        ))}
      </div>

      <h1 className={styles.upcomingTitles}>Upcoming Events</h1>
      <div className={styles.homePageEvents}>
        {events.slice(0, 4).map((eventpost) => (
          <div key={eventpost.sys.id} eventpost={eventpost}>
            <div className={styles.eventsCard}>
              <Link href={`/whatsOn/${eventpost.fields.slug}`}>
                <div className="eventThumbNail">
                  <Image
                    src={`https:${eventpost.fields.thumbnail.fields.file.url}`}
                    width={300}
                    height={300}
                    alt={eventpost.fields.thumbnailAltTag}
                  />
                </div>
                <div className={styles.eventTitle}>{eventpost.fields.title}</div>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <h1 className={styles.hpTitles}>Latest Blogs</h1>
      <div className={styles.homePageBlogs}>
        {blog.slice(0, 3).map((posts) => (
          <div key={posts.sys.id} posts={posts}>
            <div className={styles.homePageBlogCard}>
              <Link href={`/blogs/${posts.fields.slug}`}>
                <Image
                  src={`https:${posts.fields.thumbnail.fields.file.url}`}
                  width={400}
                  height={600}
                  alt={posts.fields.thumbnailAltTag}
                />

                <div className={styles.blogTitle}>
                  <h4>{posts.fields.title}</h4>
                </div>
              </Link>
              <div className="blogInfo">
                <div className={styles.blogExcerpt}>
                  <p>{posts.fields.excerpt}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="slider">
       
      </div>



    </div>
  );
}
