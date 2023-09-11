"use client";

import { Swiper } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ProductSlider = ({ children }: { children: React.ReactNode }) => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation
      modules={[Navigation]}
      className="text-white h-72"
    >
      {children}
    </Swiper>
  );
};

export default ProductSlider;
