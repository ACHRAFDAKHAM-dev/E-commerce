// src/components/Submenu.tsx
import React from "react";
import { Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { CategoryItem } from "../../data/navbarData";

type Props = {
  items: CategoryItem[];
  open: boolean;
};

const Submenu: React.FC<Props> = ({ items, open }) => {
  return (
    <div
      className={`absolute top-full left-0 min-w-[220px] bg-white shadow-lg rounded-md transition-all duration-150
      ${open ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-1"} z-50`}
    >
      <ul className="py-1">
        {items.map((cat) => (
          <li className="list-none w-full" key={cat.id}>
            <Button
              component={RouterLink}
              to="/"
              className="w-full !justify-start !rounded-none !normal-case !text-[rgba(0,0,0,0.85)] hover:!text-[#ff5252]"
            >
              {cat.category}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Submenu;

