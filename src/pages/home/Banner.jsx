import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";
import { Navigation } from "swiper";
import banner_1 from '../../assets/banner-1.png'
import banner_2 from '../../assets/banner-2.png'
import banner_3 from '../../assets/banner-3.png'

const Banner = () => {
    return (
        <div className="">
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide><img className=" w-full" src={banner_1} alt="banner image 1" /></SwiperSlide>
            <SwiperSlide><img className=" w-full" src={banner_2} alt="banner image 2" /></SwiperSlide>
            <SwiperSlide><img className=" w-full" src={banner_3} alt="banner image 3" /></SwiperSlide>
            
          </Swiper>
        </div>
      );
};

export default Banner;