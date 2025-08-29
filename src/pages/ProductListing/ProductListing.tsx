import React, { useState } from "react";
import SideBar from "../../components/SideBar/SideBar";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import ProductItem from "../../components/ProductItem/ProductItem";
import Button from "@mui/material/Button";
import { IoGrid } from "react-icons/io5";
import { LuMenu } from "react-icons/lu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ProductItemListView from "../../components/ProductItemListView/ProductItemListView";
import Pagination from '@mui/material/Pagination';
const ProductListing: React.FC = () => {
  const [itemView, setItemView] = React.useState("grid");

  function handleBtnClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <section className="py-5 pb-0 ">
      <div className="container">
        <div role="presentation" onClick={handleBtnClick}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              underline="hover"
              color="inherit"
              href="/"
              className="link transition"
            >
              Home
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/"
              className="link transition"
            >
              Fashion
            </Link>
          </Breadcrumbs>
        </div>
      </div>
      <div className="bg-white p-2 mt-4">
        <div className="container flex gap-3 ">
          <div className="sidebarWrapper w-[20%] h-full bg-white">
            <SideBar />
          </div>

          <div className="rightContent w-[80%] py-3">
            <div className="bg-[#f1f1f1] p-2 w-full mb-4 rounded-md flex items-center justify-between">
              <div className="col1 flex items-center gap-1 itemViewActions ">
                <Button
                  onClick={() => setItemView("list")}
                  className={`!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-[#000] ${itemView === 'list' && 'active'}`}
                >
                  <LuMenu className="!text-[rgba(0,0,0,0.7)]" />
                </Button>
                <Button
                  onClick={() => setItemView("grid")}
                  className={`!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-[#000] ${itemView === 'grid' && 'active'}`}
                >
                  <IoGrid className="!text-[rgba(0,0,0,0.7)]" />
                </Button>
                <span className="text-[14px] font-[500] pl-3 text-[rgba(0,0,0,0.7)]">
                  There are 25 products.
                </span>
              </div>
              <div className="col2 ml-auto flex items-center justify-end gap-3 pr-4">
                <span className="text-[14px] font-[500] pl-3 text-[rgba(0,0,0,0.7)]">
                  Sort By
                </span>

                <Button
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                  className="!bg-white !text-[12px] !text-[#000] !capitalize !border-2 !border-[#000] !font-[600] "
                >
                  Name, A To Z
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  slotProps={{
                    list: {
                      "aria-labelledby": "basic-button",
                    },
                  }}
                >
                  <MenuItem onClick={handleClose}>Name, Z To A</MenuItem>
                  <MenuItem onClick={handleClose}>Price, High To Low</MenuItem>
                  <MenuItem onClick={handleClose}>Price, Low To High</MenuItem>
                </Menu>
              </div>
            </div>

            <div className={`grid ${itemView === 'grid'?'grid-cols-4 md:grid-cols-4 ':"grid-cols- md:grid-cols-1"} gap-4`}>
              {itemView === "grid" ? (
                <>
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                </>
              ) : (
                <>
                <ProductItemListView/>
                <ProductItemListView/>
                <ProductItemListView/>
                <ProductItemListView/>
                <ProductItemListView/>
                <ProductItemListView/>
               
                </>
              )}
            </div>
            <div className="flex items-center justify-center mt-10">
              <Pagination count={10} showFirstButton showLastButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductListing;
