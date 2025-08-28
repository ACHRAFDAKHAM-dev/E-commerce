import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { FaRegSquarePlus } from "react-icons/fa6";
import { FiMinusSquare } from "react-icons/fi";
import { Category } from "./categoriesData";

type Props = {
  category: Category;
  index: number;
  subMenuIndex: number | null;
  innerSubMenuIndex: number | null;
  openSubMenu: (index: number) => void;
  openInnerSubMenu: (index: number) => void;
};

const CategoryItem: React.FC<Props> = ({
  category,
  index,
  subMenuIndex,
  innerSubMenuIndex,
  openSubMenu,
  openInnerSubMenu,
}) => {
  return (
    <li className="list-none flex items-center relative flex-col">
      <Link to={category.link} className="w-full">
        <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
          {category.name}
        </Button>
      </Link>

      {category.subCategories && (
        <>
          {subMenuIndex === index ? (
            <FiMinusSquare
              className="absolute top-[10px] right-[15px] cursor-pointer"
              onClick={() => openSubMenu(index)}
            />
          ) : (
            <FaRegSquarePlus
              className="absolute top-[10px] right-[15px] cursor-pointer"
              onClick={() => openSubMenu(index)}
            />
          )}

          {subMenuIndex === index && (
            <ul className="submenu w-full pl-3">
              {category.subCategories.map((sub, subIndex) => (
                <li key={subIndex} className="list-none relative">
                  <Link to={sub.link} className="w-full">
                    <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                      {sub.name}
                    </Button>
                  </Link>

                  {sub.items && (
                    <>
                      {innerSubMenuIndex === subIndex ? (
                        <FiMinusSquare
                          onClick={() => openInnerSubMenu(subIndex)}
                          className="absolute top-[10px] right-[15px] cursor-pointer"
                        />
                      ) : (
                        <FaRegSquarePlus
                          onClick={() => openInnerSubMenu(subIndex)}
                          className="absolute top-[10px] right-[15px] cursor-pointer"
                        />
                      )}

                      {innerSubMenuIndex === subIndex && (
                        <ul className="innerSubmenu w-full pl-3">
                          {sub.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="list-none relative mb-1">
                              <Link
                                to={item.link}
                                className="link w-full !text-left !justify-start !px-3 transition text-[14px]"
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  )}
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </li>
  );
};

export default CategoryItem;
