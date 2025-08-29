import React from "react";

import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Categories } from "../../data/Categories";
import "./SideBar.css";
import { useCollapse } from "react-collapsed";
import { FaAngleDown } from "react-icons/fa6";
import Button from "@mui/material/Button";
import { FaAngleUp } from "react-icons/fa6";
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import Rating from '@mui/material/Rating';









const SideBar: React.FC = () => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  return (
    <aside className="sidebar py-5">
      <div className="box">
        <h3 className=" mb-3 text-[16px] font-[600] w-full flex items-center pr-5">
          Shop by Category
          <Button {...getToggleProps()} className='!w-[30px] !text-[#000] !h-[30px] !min-w-[30px] !ml-auto !rounded-full'>
            {isExpanded ?<FaAngleUp />:<FaAngleDown />}
          </Button>
        </h3>

        <div
          {...getCollapseProps()}
          className="scroll px-5 relative -left-[13px] "
        >
          {Categories.map((Cat) => (
            <FormControlLabel
              className="w-full"
              key={Cat.id}
              control={<Checkbox size="small" />}
              label={Cat.name}
            />
          ))}
        </div>
         
      </div>
       <div className="box mt-4 ">
        <h3 className=" mb-3 text-[16px] font-[600] w-full flex items-center pr-5">
          Filter By Price</h3>

        <div>
         <RangeSlider />
         <div className="flex pt-4 pb-2 priceRange">
            <span className="text-[13px]">
              From <strong className="text-dark">Rs:{100}</strong>
            </span>
             <span className="ml-auto text-[13px]">
              From <strong className="text-dark">Rs:{50000}</strong>
            </span>
         </div>
        </div>
         
      </div>

      <div className="box mt-4 ">
        <h3 className=" mb-3 text-[16px] font-[600] w-full flex items-center pr-5">
          Filter By Rating</h3>
          <div className="w-full cursor-pointer">
             <Rating name="size-small" defaultValue={5} size="small" readOnly />
          </div>
          <div className="w-full">
             <Rating name="size-small" defaultValue={4} size="small" readOnly />
          </div>
          <div className="w-full">
             <Rating name="size-small" defaultValue={3} size="small" readOnly />
          </div>
          <div className="w-full">
             <Rating name="size-small" defaultValue={2} size="small" readOnly />
          </div>
          <div className="w-full">
             <Rating name="size-small" defaultValue={1} size="small" readOnly />
          </div>
       
      
        
        
        
       

         
       
         
      </div>
    </aside>
  );
};

export default SideBar;
