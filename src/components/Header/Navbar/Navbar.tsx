import React, { useState } from "react";
import { Button } from "@mui/material";
import { RiMenu2Fill } from "react-icons/ri";
import { LiaAngleDownSolid } from "react-icons/lia";
import { Link, Link as RouterLink } from "react-router-dom";
import { GoRocket } from "react-icons/go";
import CategoryPanel from "./CategoryPanel";


interface CategoryItem {
  id: number;
  category: string;
}

type CategoryGroup = CategoryItem[];


const Submenu: React.FC<{ items: CategoryItem[] }> = ({ items }) => {
  return (
    <div className="submenu absolute top-[120%] left-0 min-w-[150px] bg-white shadow-md rounded-md opacity-0 invisible translate-y-2 transition-all duration-200 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 z-20">
      <ul>
        {items.map((cat) => (
          <li className="list-none w-full" key={cat.id}>
            <Link to={'/'} className="w-full">
            <Button
              component={RouterLink}
              to="/"
              className="w-full !justify-start !rounded-none !normal-case !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]"
            >
              {cat.category}
            </Button>
                <div className="submenu absolute top-[0%] left-[100%] min-w-[150px] bg-white shadow-md rounded-md opacity-0 invisible translate-y-2 transition-all duration-200 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 z-20">
                  <ul>
                    {items.map((cat) => (
                      <li className="list-none w-full relative" key={cat.id}>
                        <Button
                          component={RouterLink}
                          to="/"
                          className="w-full !justify-start !rounded-none !normal-case !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]"
                        >
                          {cat.category}
                        </Button>
                      </li>
                    ))}
                  </ul>
                </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Navbar: React.FC = () => {
  const [isOpenCategoryPanel, setIsOpenCategoryPanel] = useState<boolean>(false);


  const Categories: CategoryGroup[] = [
    [
      { id: 1, category: "Men" },
      { id: 2, category: "Women" },
      { id: 3, category: "Boys" },
      { id: 4, category: "Girls" },
      { id: 5, category: "Kids" },
    ],
    [
      { id: 1, category: "Tv" },
      { id: 2, category: "Phones" },
      { id: 3, category: "Laptops" },
      { id: 4, category: "Gaming" },
      { id: 5, category: "Airp" },
    ],
  ];

  return (
    <>
      <nav className="py-2">
        <div className="container flex items-center justify-end gap-8">
     
          <div className="col_1 w-[20%]">
            <Button
              className="!text-black gap-2 w-full flex items-center justify-start !normal-case"
              onClick={() => setIsOpenCategoryPanel(true)}
            >
              <RiMenu2Fill className="text-[18px]" />
              Shop By Categories
              <LiaAngleDownSolid className="text-[13px] ml-auto font-bold" />
            </Button>
          </div>

         
          <div className="col_2 w-[60%]">
            <ul className="flex items-center gap-2 nav">
              {/* Home */}
              <li className="list-none relative">
                <Button
                  component={RouterLink}
                  to="/"
                  className="link transition !normal-case !text-black !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]"
                >
                  Home
                </Button>
              </li>

              {/* Fashion + Submenu */}
              <li className="list-none relative group">
                <Button
                  component={RouterLink}
                  to="/"
                  className="link transition !normal-case !text-black !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]"
                >
                  Fashion
                </Button>
                <Submenu items={Categories[0]} />
              </li>

              {/* Electronics + Submenu */}
              <li className="list-none relative group">
                <Button
                  component={RouterLink}
                  to="/"
                  className="link transition !normal-case !text-black !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]"
                >
                  Electronics
                </Button>
                <Submenu items={Categories[1]} />
              </li>

              
              <li className="list-none">
                <Button
                  component={RouterLink}
                  to="/"
                  className="link transition !normal-case !text-black !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]"
                >
                  Bags
                </Button>
              </li>

              <li className="list-none">
                <Button
                  component={RouterLink}
                  to="/"
                  className="link transition !normal-case !text-black !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]"
                >
                  Footwear
                </Button>
              </li>

              <li className="list-none">
                <Button
                  component={RouterLink}
                  to="/"
                  className="link transition !normal-case !text-black !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]"
                >
                  Groceries
                </Button>
              </li>

              <li className="list-none">
                <Button
                  component={RouterLink}
                  to="/"
                  className="link transition !normal-case !text-black !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]"
                >
                  Beauty
                </Button>
              </li>

              <li className="list-none">
                <Button
                  component={RouterLink}
                  to="/"
                  className="link transition !normal-case !text-black !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]"
                >
                  wellness
                </Button>
              </li>

              <li className="list-none">
                <Button
                  component={RouterLink}
                  to="/"
                  className="link transition !normal-case !text-black !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]"
                >
                  Jewellery
                </Button>
              </li>
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
};

export default Navbar;
