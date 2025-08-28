import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import HomeSlider from "../components/HomeSlider/HomeSlider";
import CatSlider from "../components/CatSlider/CatSlider";
import CategoriesTabs from "../components/CategoriesTabs/CategoriesTabs";
import OfferSlider from "../components/OfferSlider/OfferSlider";
import OfferBannerSlider from "../components/OfferBannerSlider/OfferBannerSlider";
import FreeShipping from "../components/FreeShipping/FreeShipping";
import ProductsSlider from "../components/ProductsSlider/ProductsSlider";

import BlogItem from "../components/BlogItem/BlogItem";
import Footer from "../components/Footer/Footer";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import AdsBanner from "../components/AdsBanner/AdsBanner";
import AdsBannerSlider from "../components/AdsBannerSlider/AdsBannerSlider";


const Home: React.FC = () => {
  return (
    <>
      {/* ===== Hero Slider ===== */}
      <HomeSlider />

      {/* ===== Categories Section ===== */}
      <CatSlider />
      <CategoriesTabs />

      {/* ===== Offer Section ===== */}
      <section className="py-6">
        <div className="container flex flex-col lg:flex-row gap-5">
          {/* Main Offer Slider */}
          <div className="w-full lg:w-[70%]">
            <OfferSlider />
          </div>

          {/* Side Banners */}
          <div className="w-full lg:w-[30%] flex flex-col gap-5 items-center justify-between">
            <OfferBannerSlider link='/' info="right" title ='Footwear' price="$99.99" image="/bannerPhoto.jpg" />
            <OfferBannerSlider link='/' info="left" title ='Phone' price="$98.00" image="/bannerphoto2.jpg" />
          </div>
        </div>
      </section>

      {/* ===== Free Shipping Section ===== */}

              <FreeShipping />

      {/* ===== Latest Products Section ===== */}
      <section className="py-6 bg-white">
        <div className="container">
          <h2 className="text-[20px] font-[600] mb-4">Latest Products</h2>
          <ProductsSlider items={6} />
        </div>

        <div className="container mt-4">
          <AdsBanner items={4}/>
        </div>
      </section>

      {/* ===== Featured Products Section ===== */}
      <section className="py-6 bg-white">
        <div className="container">
          <h2 className="text-[20px] font-[600] mb-4">Featured Products</h2>
          <ProductsSlider items={6} />
        </div>

        <div className="container mt-4">
          {/* <AdsBanner items={4} /> */}
          <AdsBannerSlider items={4}/>
        </div>
      </section>

      {/* ===== Blog Section ===== */}
      <section className="py-6 bg-white">
        <div className="container">
          <h2 className="text-[20px] font-[600] mb-4">From The Blog</h2>
          <Swiper
            slidesPerView={3}
            spaceBetween={20}
            navigation
            modules={[Navigation]}
            className="blogSlider"
            breakpoints={{
              640: { slidesPerView: 1 },
              1024: { slidesPerView: 2 },
              1280: { slidesPerView: 3 },
            }}
          >
            {[1, 2, 3].map((_, index) => (
              <SwiperSlide key={index}>
                <BlogItem />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <Footer />
    </>
  );
};

export default Home;
