import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import OfferBannerSlider from "../OfferBannerSlider/OfferBannerSlider";

type Props = {
  items: number;
};

const Banners = [
  {
    id: 1,
    url: "/bannerPhoto.jpg",
    info: "right",
    price: "$99.00",
    link: "/",
  },
  {
    id: 2,
    url: "/bannerphoto2.jpg",
    info: "left",
    price: "$99.00",
    link: "/",
  },
  {
    id: 3,
    url: "/bannerPhoto.jpg",
    info: "right",
    price: "$99.00",
    link: "/",
  },
  {
    id: 4,
    url: "/bannerphoto2.jpg",
    info: "left",
    price: "$99.00",
    link: "/",
  },
  {
    id: 5,
    url: "/bannerPhoto.jpg",
    info: "right",
    price: "$99.00",
    link: "/",
  },
  {
    id: 6,
    url: "/bannerphoto2.jpg",
    info: "left",
    price: "$99.00",
    link: "/",
  },
];




const AdsBannerSliderV: React.FC<Props> = ({ items }) => {
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
        {Banners.map((banner) => {
          return (
            <SwiperSlide>
              <OfferBannerSlider
                image={banner.url}
                info={banner.info}
                title={"hello"}
                price={banner.price}
                link={banner.link}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default AdsBannerSliderV;
