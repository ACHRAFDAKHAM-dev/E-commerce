import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "./HomeSlider.css"; 


const HomeSlider: React.FC = () => {
  return (
    <div className="homeSlider py-4">
        <div  className="container">
            <Swiper
                loop={true}
                spaceBetween ={10}
                autoplay={{delay:2500,disableOnInteraction:false}}
                modules={[Navigation, Autoplay]}
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
            </Swiper>
        </div>
    </div>
  );
};

export default HomeSlider;
