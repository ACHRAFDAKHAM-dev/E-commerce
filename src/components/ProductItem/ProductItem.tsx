import React from "react";
import "./ProductItem.css";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import { FaRegHeart } from "react-icons/fa";
import { IoGitCompareOutline } from "react-icons/io5";
import { MdZoomOutMap } from "react-icons/md";
import Tooltip from "@mui/material/Tooltip";
const ProductItem: React.FC = () => {
  return (
    <div className="productItem shadow-lg rounded-md overflow-hidden border-2 border-[rgba(0,0,0,0.1)]">
      {" "}
      <div className="group imgWrapper w-[100%]  relative">
        {" "}
        <Link to={'/'}>
           <div className="img h-[220px] overflow-hidden relative">
             <img
            src="https://serviceapi.spicezgold.com/download/1753711304615_zoom_0-1677748187.jpg"
            className="w-full"
            alt="banner"
            />{" "}
            <img
            src="https://serviceapi.spicezgold.com/download/1753711304616_zoom_1-1677748187.jpg"
            className="w-full transition-all duration-500  absolute top-0 left-0 opacity-0 group-hover:opacity-100 group-hover:scale-105"
            alt="banner"
            />{" "}
           </div>
        </Link>
        <span className="discount flex items-center absolute top-[10px] left-[10px] z-10 bg-primary-color p-1 text-[12px] font-[500] text-white rounded-lg">
          {" "}
          15%{" "}
        </span>{" "}
        <div className="actions absolute top-[-200px] right-[5px] z-50 flex items-center gap-2 flex-col w-[50px] transition-all duration-500 group-hover:top-[15px] opacity-0 group-hover:opacity-100">
          {" "}

          <Button className="!w-[35px] !text-black !h-[35px] !min-w-[35px] !rounded-full !bg-white hover:!bg-primary-color hover:!text-white group">
            <MdZoomOutMap className="group text-[18px] !text-black group-hover:text-white " />{" "}
          </Button>

          <Button className="!w-[35px] !text-black !h-[35px] !min-w-[35px] !rounded-full !bg-white hover:!bg-primary-color hover:!text-white group">
            {" "}
            <IoGitCompareOutline className="group text-[18px] !text-black group-hover:text-white " />{" "}
          </Button>{" "}
          <Button className="!w-[35px] !text-black !h-[35px] !min-w-[35px] !rounded-full !bg-white hover:!bg-primary-color hover:!text-white group">
            {" "}
            <FaRegHeart className="group text-[18px] !text-black group-hover:text-white " />{" "}
          </Button>{" "}
        </div>{" "}
      </div>{" "}
      <div className="info p-3 py-5">
        {" "}
        <h6 className="text-[13px]">
          {" "}
          <Link to={"/"} className="link transition-all">
            {" "}
            dappz{" "}
          </Link>{" "}
        </h6>{" "}
        <h3 className="text-[13px] title mt-1 mb-1 font-[500] text-[#000]">
          {" "}
          <Link to={"/"} className="link transition-all">
            {" "}
            mandarin collar printed anarkali kurta{" "}
          </Link>{" "}
        </h3>{" "}
        <Rating name="size-small" defaultValue={2} size="small" readOnly />{" "}
        <div className="flex items-center gap-4 justify-between">
          {" "}
          <span className="oldPrice line-through text-gray-500 text-[16px] font-[500]">
            {" "}
            $58.00{" "}
          </span>{" "}
          <span className="price text-[16px] text-primary-color font-bold">
            {" "}
            $58.00{" "}
          </span>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};
export default ProductItem;
