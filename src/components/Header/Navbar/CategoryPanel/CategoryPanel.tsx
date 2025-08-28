import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { IoClose } from "react-icons/io5";
import CategoryItem from "./CategoryItem";
import { categories } from "./categoriesData";

type Props = {
  isOpenCategoryPanel: boolean;
  setIsOpenCategoryPanel: React.Dispatch<React.SetStateAction<boolean>>;
};

function CategoryPanel(props: Props) {
  const [subMenuIndex, setSubMenuIndex] = React.useState<number | null>(null);
  const [innerSubMenuIndex, setInnerSubMenuIndex] = React.useState<number | null>(null);

  const openSubMenu = (index: number) =>
    setSubMenuIndex(subMenuIndex === index ? null : index);

  const openInnerSubMenu = (index: number) =>
    setInnerSubMenuIndex(innerSubMenuIndex === index ? null : index);

  const DrawerList = (
    <Box className="Category-panel" sx={{ width: 250 }} role="presentation">
      <h3 className="p-3 text-[16px] font-[500] flex items-center justify-between">
        تسوق حسب الفئات
        <IoClose
          className="cursor-pointer text-[20px] font-[500]"
          onClick={() => props.setIsOpenCategoryPanel(false)}
        />
      </h3>

      <div className="scroll">
        <ul className="w-full">
          {categories.map((category, index) => (
            <CategoryItem
              key={index}
              category={category}
              index={index}
              subMenuIndex={subMenuIndex}
              innerSubMenuIndex={innerSubMenuIndex}
              openSubMenu={openSubMenu}
              openInnerSubMenu={openInnerSubMenu}
            />
          ))}
        </ul>
      </div>
    </Box>
  );

  return (
    <Drawer
      open={props.isOpenCategoryPanel}
      onClose={() => props.setIsOpenCategoryPanel(false)}
    >
      {DrawerList}
    </Drawer>
  );
}

export default CategoryPanel;
