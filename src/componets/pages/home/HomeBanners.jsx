import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HomeBanners = () => {
  return (
    <div>
      <Swiper
        autoplay={true}
        loop={true}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="bannerSlides1"></SwiperSlide>
        <SwiperSlide className="bannerSlides2"></SwiperSlide>
        <SwiperSlide className="bannerSlides3"></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeBanners;
