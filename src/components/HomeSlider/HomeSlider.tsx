import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "./HomeSlider.css"; 

const HomeSlider: React.FC = () => {
  return (
    <div className="homeSlider py-4">
        <div  className="container">
            <Swiper
                spaceBetween ={10}
                modules={[Navigation]}
                navigation
                className="sliderHome custom-swiper"
            >
                <SwiperSlide>
                   <div className="item rounded-[20px] overflow-hidden">
                         <img src="https://serviceapi.spicezgold.com/download/1755503418386_NewProject(12).jpg" 
                            alt="banner" 
                            className="w-full" 
                            />
                   </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="item rounded-[20px] overflow-hidden">
                         <img src="../../../public/seller_banner_image.jpg" 
                            alt="banner" 
                            className="w-full" 
                            />
                   </div>
                    
                </SwiperSlide>
                <SwiperSlide>
                    <div className="item rounded-[20px] overflow-hidden">
                         <img src="https://serviceapi.spicezgold.com/download/1755503364377_1721277298204_banner.jpg" 
                            alt="banner" 
                            className="w-full" 
                            />
                   </div>
                </SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
            </Swiper>
        </div>
    </div>
  );
};

export default HomeSlider;
