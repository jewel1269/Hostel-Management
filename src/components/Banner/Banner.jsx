import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import banner from "../../assets/banner.png"
import banner2 from "../../assets/banner2.png"
import banner3 from "../../assets/banner3.jpg"
import banner4 from "../../assets/banner4.jpg"

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
        <SwiperSlide className="opacity-70 outline-black"><img src={banner4} alt="" /></SwiperSlide>
        <SwiperSlide className="opacity-70 outline-black"><img src={banner3} alt="" /></SwiperSlide>
        <SwiperSlide className="opacity-70 outline-black"><img src={banner} alt="" /></SwiperSlide>
        <SwiperSlide className="opacity-70 outline-black"><img src={banner2} alt="" /></SwiperSlide>
       
      </Swiper>
      <h1 className="text-center relative text-5xl font-semibold z-[100] text-white -top-96">Welcome to our website <br /><strong className="text-black">Hosteller</strong></h1>
      <div className="stats relative lg:bottom-80 hidden  lg:flex lg:flex-1 h-28 w-[50%]  z-[100] lg:ml-[460px] bg-gradient-to-r from-cyan-500 to-blue-500 shadow">
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    </div>
    <div className="stat-title text-black text-lg">Booking</div>
    <div className="stat-value text-lg">1K</div>
    <div className="stat-desc text-black  text-lg">Jan 1st - Feb 1st</div>
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
    </div>
    <div className="text-lg text-black stat-title">New Users</div>
    <div className="text-lg stat-value">4,200</div>
    <div className="text-lg text-black stat-desc">↗︎ 400 (22%)</div>
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
    </div>
    <div className=" text-lg text-black stat-title">New Registers</div>
    <div className=" text-lg stat-value">1,200</div>
    <div className=" text-lg text-black stat-desc">↘︎ 90 (14%)</div>
  </div>
  
</div>
    </div>
  );
};

export default Banner;
