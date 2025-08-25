import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ProductItem from "../ProductItem/ProductItem";
type Props = {
  items: number;
};

const ProductsSlider: React.FC<Props> = ({ items }) => {
  return (
    <div className="productsSlider py-3">
      <div className="">
        <Swiper
          slidesPerView={items}
          spaceBetween={10}
          navigation
          modules={[Navigation]}
          className="mySwiper"
        //   breakpoints={{
        //     320: { slidesPerView: 2 },
        //     640: { slidesPerView: 4 },
        //     1024: { slidesPerView: 6 },
        //     1280: { slidesPerView: 8 },
        //   }}
        >
          <SwiperSlide>
            <ProductItem/>
          </SwiperSlide>
          <SwiperSlide>
            <ProductItem/>
          </SwiperSlide>
          <SwiperSlide>
            <ProductItem/>
          </SwiperSlide>
          <SwiperSlide>
            <ProductItem/>
          </SwiperSlide>
          <SwiperSlide>
            <ProductItem/>
          </SwiperSlide>
          <SwiperSlide>
            <ProductItem/>
          </SwiperSlide>
          <SwiperSlide>
            <ProductItem/>
          </SwiperSlide>
          <SwiperSlide>
            <ProductItem/>
          </SwiperSlide>
          <SwiperSlide>
            <ProductItem/>
          </SwiperSlide>
          <SwiperSlide>
            <ProductItem/>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default ProductsSlider;
