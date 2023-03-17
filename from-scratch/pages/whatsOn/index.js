import React from 'react'
import Head from 'next/head'
import { createClient } from "contentful";
import EventCard from '@/components/EventCard';
import Slider from '@/components/Slider';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from 'next/image';
import { Navigation } from "swiper";



 const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

export async function getStaticProps() {
 
  const res = await client.getEntries({
    content_type: "events",
  });

  const slide = res.items.map((item => item.fields))
  
  return {
    props: {
      events: res.items,
      slide
    },
    revalidate: 10,
  };
}

export default function eventsHome({ events, slide }) {
  console.log(slide);
  return (
    <div>
      <Head>
        <title>From Scratch | Events </title>
        <meta
          name="description"
          content="A charity for children using art to express themselves"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <div className="eventCard">
        {events.map((event) => (
          <EventCard key={event.sys.id} event={event} />
        ))}
      </div>

      <div className="slider">
        {/* {events.map(slide => (
          <Slider key={slide.sys.id} slide={slide} />
          ))} */}
      </div>

      <div className="swiperSlide">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {slide.map((image) => (
            <SwiperSlide key={image.title}>
              {/* <Image
                src={`https:${slide.fields.thumbnail.fields.file.url}`}
                width={400}
                height={400}
                alt={thumbnailAltTag}
              /> */}
            </SwiperSlide>
          ))}

          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
