import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import React from "react";
import { Categories, Category } from "../../data/Categories";
import ProductsSlider from "../ProductsSlider/ProductsSlider";

const CategoriesTabs: React.FC = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <section className="bg-white py-8">
      <div className="container">
        <div className="flex items-center justify-between">
          {/* Left Section */}
          <div className="leftSec">
            <h3 className="font-[600] text-[20px]">Popular Products</h3>
            <p className="font-[500] text-[15px]">
              Do not miss the current offers until the end of March.
            </p>
          </div>

          {/* Right Section */}
          <div className="rightSec w-[65%]">
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              aria-label="scrollable auto tabs example"
            >
              {Categories.map((cat: Category) => (
                <Tab key={cat.id} label={cat.name} />
              ))}
            </Tabs>
          </div>
        </div>
        <ProductsSlider items={6} />
      </div>
    </section>
  );
};

export default CategoriesTabs;
