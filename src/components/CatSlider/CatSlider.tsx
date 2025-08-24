import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

// import "./styles.css";

const CatSlider: React.FC = () => {
  return (
    <div className="homeCatSlider">
      <div className="container">
        <Swiper
          slidesPerView={7}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules ={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="item py-3 bg-white rounded-sm">
                <img src="../../../public/stripe_logo.png" alt="dsd" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item py-3 bg-white rounded-sm">
                <img src="../../../public/stripe_logo.png" alt="dsd" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item py-3 bg-white rounded-sm">
                <img src="../../../public/stripe_logo.png" alt="dsd" />
            </div>
          </SwiperSlide>
          
        </Swiper>
      </div>
    </div>
  );
};

export default CatSlider;
