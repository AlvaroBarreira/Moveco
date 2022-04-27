import React, { useRef, useState } from "react";


import example from '../../Assets/example.jpeg'
import example1 from '../../Assets/example1.jpeg'
import example2 from '../../Assets/example2.jpeg'
import example3 from '../../Assets/example3.jpeg'

import example4 from '../../Assets/example4.jpeg'
import example5 from '../../Assets/example5.jpeg'
import example6 from '../../Assets/example6.jpeg' //ver
import example7 from '../../Assets/example7.jpeg'

import example8 from '../../Assets/example8.jpeg'
import example9 from '../../Assets/example9.jpeg'
import example10 from '../../Assets/example10.jpeg'
import example11 from '../../Assets/example11.jpeg'
import example12 from '../../Assets/example12.jpeg'


import airplane from '../../Assets/airplane.jpg'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Slider.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export const Slider = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 7500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
               
               
                
                 
                
              
                <SwiperSlide><img src={example6} alt="example" /></SwiperSlide>   
               


            </Swiper>
        </>
    );
}
