import React from "react";

import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Categories } from "../../data/Categories";
import "./SideBar.css";
import { useCollapse } from "react-collapsed";
import { FaAngleDown } from "react-icons/fa6";
import Button from "@mui/material/Button";
import { FaAngleUp } from "react-icons/fa6";

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
    </aside>
  );
};

export default SideBar;
