import React, { useState } from 'react';
import { Button } from "@mui/material";
import { RiMenu2Fill } from "react-icons/ri";
import { LiaAngleDownSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import { GoRocket } from "react-icons/go";
import CategoryPanel from "./CategoryPanel";

function Navbar() {
  const [isOpenCategoryPanel, setIsOpenCategoryPanel] = useState(false);

  return (
    <>
      <nav className="py-2">
        <div className="container flex items-center justify-end gap-8">
      
          <div className="col_1 w-[20%]">
            <Button
              className="!text-black gap-2 w-full flex items-center justify-start"
              onClick={() => setIsOpenCategoryPanel(true)} 
            >
              <RiMenu2Fill className="text-[18px]" />
              Shop By Categories 
              <LiaAngleDownSolid className="text-[13px] ml-auto font-bold" />
            </Button>
          </div>

         
          <div className="col_2 w-[60%]">
            <ul className="flex items-center gap-2">
             <li className="list-none"> <Link to="/" className="link transition text-[14px] font-[500]"> <Button className="link transition !text-black !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]"> Home </Button> </Link> </li> <li className="list-none"> <Link to="/" className="link transition text-[14px] font-[500]"> <Button className="link transition !text-black !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]"> Fashion </Button> </Link> </li> <li className="list-none"> <Link to="/" className="link transition text-[14px] font-[500]"> <Button className="link transition !text-black !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]"> Electronics </Button> </Link> </li> <li className="list-none"> <Link to="/" className="link transition text-[14px] font-[500]"> <Button className="link transition !text-black !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]"> Bags </Button> </Link> </li> <li className="list-none"> <Link to="/" className="link transition text-[14px] font-[500]"> <Button className="link transition !text-black !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]"> Footwear </Button> </Link> </li> <li className="list-none"> <Link to="/" className="link transition text-[14px] font-[500]"> <Button className="link transition !text-black !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]"> Groceries </Button> </Link> </li> <li className="list-none"> <Link to="/" className="link transition text-[14px] font-[500]"> <Button className="link transition !text-black !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]"> Beauty </Button> </Link> </li> <li className="list-none"> <Link to="/" className="link transition text-[14px] font-[500]"> <Button className="link transition !text-black !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]"> wellness </Button> </Link> </li> <li className="list-none"> <Link to="/" className="link transition text-[14px] font-[500]"> <Button className="link transition !text-black !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]"> Jewellery </Button> </Link> </li>
            
            </ul>
          </div>

         
          <div className="col_3 w-[20%]">
            <p className="text-[15px] font-[500] flex items-center gap-3 mb-0 mt-0">
              <GoRocket className="text-[18px]" />
              Free International Delivery
            </p>
          </div>
        </div>
      </nav>

      {/* Category Panel Components */}
      <CategoryPanel
        isOpenCategoryPanel={isOpenCategoryPanel}
        setIsOpenCategoryPanel={setIsOpenCategoryPanel}
      />
    </>
  );
}

export default Navbar;
