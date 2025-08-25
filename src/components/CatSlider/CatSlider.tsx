import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface Category {
  id: number;
  title: string;
  url: string;
}

const categories: Category[] = [
  { id: 1, title: "Fashion", url: "https://serviceapi.spicezgold.com/download/1741660988059_ele.png" },
  { id: 2, title: "Electronics", url: "https://serviceapi.spicezgold.com/download/1741660988059_ele.png" },
  { id: 3, title: "Bags", url: "https://serviceapi.spicezgold.com/download/1741660988059_ele.png" },
  { id: 4, title: "Footwear", url: "https://serviceapi.spicezgold.com/download/1741660988059_ele.png" },
  { id: 5, title: "Groceries", url: "https://serviceapi.spicezgold.com/download/1741660988059_ele.png" },
  { id: 6, title: "Beauty", url: "https://serviceapi.spicezgold.com/download/1741660988059_ele.png" },
  { id: 7, title: "wellness", url: "https://serviceapi.spicezgold.com/download/1741660988059_ele.png" },
  { id: 8, title: "jeweller", url: "https://serviceapi.spicezgold.com/download/1741660988059_ele.png" },
];

const CatSlider: React.FC = () => {
  return (
    <div className="homeCatSlider pt-4 py-8">
      <div className="container">
        <Swiper
          slidesPerView={8}
          spaceBetween={10}
          navigation
          modules={[Navigation]}
          className="mySwiper"
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
            1280: { slidesPerView: 8 },
          }}
        >
          {categories.map((cat) => (
            <SwiperSlide key={cat.id}>
              <Link to="/">
                <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                  <img
                    src={cat.url}
                    alt={cat.title}
                    className="w-[60px] transition-all"
                  />
                  <br />
                  <h3 className="text-[15px] font-medium mt-3">{cat.title}</h3>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CatSlider;
