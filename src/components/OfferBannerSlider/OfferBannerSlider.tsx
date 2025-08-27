import React from "react";
import { Link } from "react-router-dom";
import './OfferBannerSlider.css'
type Props = {
  image: string;
  alt?: string;
  info: "right" | "left";
  title: string;
  price: string;
  link: string;
};

const OfferBannerSlider = ({
  image,
  alt= "offer banner",
  info,
  title,
  price,
  link,
}: Props) => {
  return (
    <div className="offerBannerSlider w-full overflow-hidden rounded-md group relative">
      <img
        src={image}
        alt={alt}
        className="w-full transition-transform duration-300 group-hover:scale-105"
      />
      <div
        className={`info flex items-center justify-center gap-2 flex-col p-5 absolute top-0 ${
          info === "right" ? "right-0 pr-12" : "left-0 pl-12"
        } z-50 transition-all duration-500 opacity-90`}
      >
        <h2 className="text-[18px] font-[600]">{title}</h2>
        <span className="text-[20px] text-primary-color font-[600] w-full">
          {price}
        </span>
        <div className="w-full">
          <Link
            to={link}
            className="link text-[16px] font-[600] underline hover:text-primary-color"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OfferBannerSlider;

