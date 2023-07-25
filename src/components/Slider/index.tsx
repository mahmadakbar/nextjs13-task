"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import { generateRandomImg } from "@utils";

interface Props {
  data: Array<any>;
}

export default function Slider({ data }: Props) {
  return (
    <div className="h-[700px] border w-full">
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full h-full"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <Image src={item} width={1800} height={700} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
