import React, { Component } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import EventCard from './EventCard';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";



export default function Slider({ slide }) {
  const { thumbnail, thumbnailAltTag, title, eventDate, slug } = slide.fields;
//  console.log(slide)
  return (
    <div className="mobileCarousel">
      {/* <Carousel showThumbs={false}>
        <div className='mobileCarousel'>
            <Link href={`/whatsOn/${slug}`}>
            <Image
            src={`https:${thumbnail.fields.file.url}`}
            width={400}
            height={400}
            alt={thumbnailAltTag}
            />
            
          </Link>
          </div>
          <div>
            {title}
          </div>
      </Carousel> */}

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <Link href={`/whatsOn/${slug}`}>
            
            <Image
            src={`https:${thumbnail.fields.file.url}`}
            width={400}
            height={400}
            alt={thumbnailAltTag}
            />
          </Link>
         
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </div>
  );
}
