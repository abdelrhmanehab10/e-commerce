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
      <SwiperSlide className="bg-[url(/slider/1.jpg)] bg-right bg-cover">
        <div className="text-center h-full flex flex-col justify-center items-center">
          <h5 className="uppercase text-sm font-semibold">Summer 2020</h5>
          <h1 className="uppercase text-4xl py-3 font-bold">New Collection</h1>
          <p className="w-2/3 pb-5 font-light">
            We know how large objects will act, but things on a small scale
          </p>
          <Button className="bg-[#2DC071] text-lg font-semibold">
            Shop Now
          </Button>
        </div>
      </SwiperSlide>
      <SwiperSlide className="bg-[url(/slider/2.jpg)] bg-center bg-cover">
        <div className="text-center h-full flex flex-col justify-center items-center">
          <h1 className="uppercase text-4xl py-3 font-bold">Black Friday</h1>
          <p className="w-2/3 pb-5 font-light">
            We know how large objects will act, but things on a small scale
          </p>
          <Button className="bg-[#2DC071] text-lg font-semibold">
            Start Now
          </Button>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
