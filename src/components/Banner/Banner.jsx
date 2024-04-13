import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import pic1 from "../../assets/pic1.png"
import pic2 from "../../assets/pic2.png"
import pic3 from "../../assets/pic3.png"
import pic4 from "../../assets/pic4.png"

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Style.css";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <div>
      <Swiper id="jewel"
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={pic1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={pic2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={pic3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={pic4} alt="" /></SwiperSlide>
       
      </Swiper>
    </div>
  );
};

export default Banner;
