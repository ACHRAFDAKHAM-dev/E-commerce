
import React from "react";
import { IoMdTime } from "react-icons/io";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const BlogItem: React.FC = () => {
  return (
    <div className="blogItem group">
      <div className="imgWrapper overflow-hidden rounded-md cursor-pointe relative">
        <img
          src="https://serviceapi.spicezgold.com/download/1750304462017_1000005912.jpg"
          alt="banner"
          className="w-full transition-all group-hover:scale-105 group-hover:rotate-1"
        />

        <span className="flex items-center justify-center text-white absolute bottom-[15px] right-[15px] gap-1 z-50 bg-primary-color rounded-md p-1 text-[11px] font-[500] ">
          <IoMdTime className="text-[16px] font-[500]" /> 2026-04-12
        </span>
      </div>

      <div className="info py-4">
        <h2 className="link text-black font-[600] text-[16px]">
            <Link to={'/'}>
            sustainable living through cutting-edge prefabricated homes
            </Link>
        </h2>

        <p  className="text-[rgba(0,0,0.8)] font-[400] text-[13px] mb-4">
          Give2 lady of they such they sure it. Me contained explained my
          education. Vulgar as hearts by garret...

        </p>
        <Link className="flex items-center link font-[500] text-[14px] gap-1" to={'/'}>Read More<IoIosArrowForward />
        </Link>
      </div>
    </div>
  );
};

export default BlogItem;
