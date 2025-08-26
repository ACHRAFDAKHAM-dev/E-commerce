
import AdsBannerSlider from "../components/AdsBannerSlider/AdsBannerSlider";
import CategoriesTabs from "../components/CategoriesTabs/CategoriesTabs";
import CatSlider from "../components/CatSlider/CatSlider";
import FreeShipping from "../components/FreeShipping/FreeShipping";
import HomeSlider from "../components/HomeSlider/HomeSlider";
import ProductsSlider from "../components/ProductsSlider/ProductsSlider";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import BlogItem from "../components/BlogItem/BlogItem";

const Home: React.FC = () => {
  

  return (
    <>
      <HomeSlider />
      <CatSlider />
      <CategoriesTabs/>
      <FreeShipping/>

      <section className="py-2 bg-white">
        <div className="container">
          <h2 className="text-[20px] font-[600]">Latest Products</h2>
          <ProductsSlider items={6} />
        </div>
        
       <div className="container">
          <AdsBannerSlider items={4}/>
        </div>
      </section>
      <section className="py-2 bg-white">
        <div className="container">
          <h2 className="text-[20px] font-[600]">Featured Products</h2>
          <ProductsSlider items={6} />
        </div>
        <div className="container">
          <AdsBannerSlider items={2}/>
        </div>
      
      </section>


       <section className="blogSection pb-8 pt-0 py-2 bg-white">
          <div className="py-5 container">
            <h2 className="text-[20px] font-[600] mb-4">From The Blog</h2>
              <Swiper
                      slidesPerView={3}
                      spaceBetween={10}
                      navigation
                      modules={[Navigation]}
                      className="blogSlider"
                      // breakpoints={{
                      //   320: { slidesPerView: 2 },
                      //   640: { slidesPerView: 4 },
                      //   1024: { slidesPerView: 6 },
                      //   1280: { slidesPerView: 8 },
                      // }}
                    >
                      <SwiperSlide>
                        <BlogItem/>

                      </SwiperSlide>

                    </Swiper>


          </div>
       </section>
    </>
  );
};

export default Home;
