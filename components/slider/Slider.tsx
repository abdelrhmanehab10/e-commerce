"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Button } from "../ui/button";

const Slider = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{
        bulletActiveClass: "active__bullet",
        bulletClass: "bullet",
        clickable: true,
      }}
      modules={[Pagination, Navigation]}
      className="h-[85vh] text-white"
    >
      <SwiperSlide className="bg-[url(/slider/1.jpg)] bg-right md:bg-top bg-cover">
        <div className="text-center md:text-left h-full flex flex-col justify-center items-center md:items-start md:pl-36 bg-black/20">
          <h5 className="uppercase text-sm font-semibold">Summer 2023</h5>
          <h1 className="uppercase text-4xl py-3 font-bold">New Collection</h1>
          <p className="w-2/3 md:w-1/2 pb-5 font-light">
            Discover our latest summer fashion trends and elevate your style for
            the sunny days ahead.{" "}
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide className="bg-[url(/slider/new2.jpg)] bg-center bg-cover">
        <div className="text-center h-full flex flex-col justify-center items-center bg-black/20">
          <h5 className="uppercase text-sm font-semibold">Winter 2023</h5>
          <h1 className="uppercase text-4xl py-3 font-bold">Black Friday</h1>
          <p className="w-2/3 md:w-1/2 pb-5 font-light">
            Stay cozy and chic with our winter essentials. Explore our
            collection of warm and fashionable clothing.
          </p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
