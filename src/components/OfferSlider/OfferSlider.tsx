import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import Button from "@mui/material/Button";

type Slide = {
  image: string;
  subtitle: string;
  title: string;
  price: string;
  link: string;
};

const slides: Slide[] = [
  {
    image:
      "https://serviceapi.spicezgold.com/download/1756273096312_1737036773579_sample-1.jpg",
    subtitle: "Big Saving Days Sales",
    title: "Women Round Solid Green T-shirt",
    price: "$59.00",
    link: "/shop",
  },
  {
    image:
      "https://serviceapi.spicezgold.com/download/1756273096312_1737036773579_sample-1.jpg",
    subtitle: "Flash Deal Limited Time",
    title: "Trendy Summer Cotton Dress",
    price: "$79.00",
    link: "/shop",
  },
];

const OfferSlider: React.FC = () => {
  return (
    <Swiper
      loop={true}
      spaceBetween={30}
      effect={"fade"}
      navigation={true}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      pagination={{
        clickable: true,
      }}
      modules={[EffectFade, Navigation, Pagination, Autoplay]}
      className="offerSlider"
    >
      {slides.map((slide, i) => (
        <SwiperSlide key={i}>
          <div className="item w-full overflow-hidden rounded-md relative group">
            <img src={slide.image} alt={slide.title} className="w-full" />
            <div className="info absolute top-0 right-0 w-[50%] h-full opacity-0 z-50 p-8 flex justify-center items-center flex-col transition-all duration-700 group-hover:opacity-100 group-hover:right-0">
              <h4 className="text-[18px] w-full text-left font-[500] mb-3">
                {slide.subtitle}
              </h4>
              <h2 className="text-[35px] font-[700] w-full">{slide.title}</h2>
              <h3 className="flex items-center text-[18px] gap-3 w-full text-left font-[500] mb-3 mt-3">
                Starting At Only{" "}
                <span className="text-primary-color text-[30px] font-[700]">
                  {slide.price}
                </span>
              </h3>
              <div className="w-full">
                <Button
                  className="btn-org"
                  href={slide.link}
                  variant="contained"
                >
                  SHOP NOW
                </Button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default OfferSlider;
