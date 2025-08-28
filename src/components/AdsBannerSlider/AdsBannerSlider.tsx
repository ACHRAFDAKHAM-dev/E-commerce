
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import BannerBox from "../BannerBox/BannerBox";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


type Props ={
    items:number;
}
const AdsBannerSlider:React.FC<Props>=({items})=>{
    return (
        <div className="py-5 w-full ">
                   <Swiper
                        slidesPerView={items}
                        spaceBetween={10}
                        navigation
                        modules={[Navigation]}
                        className="smlBtn"
                        breakpoints={{
                          320: { slidesPerView: 1 },
                          640: { slidesPerView: 2 },
                          1024: { slidesPerView: 3 },
                          1280: { slidesPerView: 4 },
                        }}
                      >
                        <SwiperSlide>
                            <BannerBox url={"https://serviceapi.spicezgold.com/download/1741669037986_banner2.webp"}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <BannerBox url={"https://serviceapi.spicezgold.com/download/1741669037986_banner2.webp"}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <BannerBox url={"https://serviceapi.spicezgold.com/download/1741669037986_banner2.webp"}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <BannerBox url={"https://serviceapi.spicezgold.com/download/1741669037986_banner2.webp"}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <BannerBox url={"https://serviceapi.spicezgold.com/download/1741669037986_banner2.webp"}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <BannerBox url={"https://serviceapi.spicezgold.com/download/1741669037986_banner2.webp"}/>
                        </SwiperSlide>
                      </Swiper>
        </div>
    );
}


export default AdsBannerSlider;