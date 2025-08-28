import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import BannerBox from "../BannerBox/BannerBox";


type Props = {
  items: number;
};

const AdsBannerSlider: React.FC<Props> = (props: Props) => {
  const Banners = [
    {
      id: 1,
      url: "https://serviceapi.spicezgold.com/download/1741669012402_banner1.webp",
    },
    {
      id: 2,
      url: "https://serviceapi.spicezgold.com/download/1741669012402_banner1.webp",
    },
    {
      id: 3,
      url: "https://serviceapi.spicezgold.com/download/1741669012402_banner1.webp",
    },
    {
      id: 4,
      url: "https://serviceapi.spicezgold.com/download/1741669012402_banner1.webp",
    },
    {
      id: 5,
      url: "https://serviceapi.spicezgold.com/download/1741669012402_banner1.webp",
    },
    {
      id: 6,
      url: "https://serviceapi.spicezgold.com/download/1741669012402_banner1.webp",
    },
  ];
  return (
    <div className="py-12 w-full">
      <Swiper
        slidesPerView={props.items}
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
        {Banners.map((banner) => {
          return (
            <SwiperSlide key={banner.id}>
             <BannerBox url={banner.url} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default AdsBannerSlider;
