import AdsBannerSlider from "../components/AdsBannerSlider/AdsBannerSlider";
import CategoriesTabs from "../components/CategoriesTabs/CategoriesTabs";
import CatSlider from "../components/CatSlider/CatSlider";
import HomeSlider from "../components/HomeSlider/HomeSlider";
import { LiaShippingFastSolid } from "react-icons/lia";

const Home: React.FC = () => {
  

  return (
    <>
      <HomeSlider />
      <CatSlider />
      <CategoriesTabs/>
      <section className="py-16 bg-white mt-5">
        <div className="container">
          <div className="freeShipping mb-7 w-[80%] m-auto p-4 py-4 border border-t-[red] flex items-center justify-between rounded-md py-2">
            <div className="col1 flex items-center gap-4">
              <LiaShippingFastSolid className="text-[50px]" />
              <span className="text-[20px] font-[600] uppercase">
                Free Shipping
              </span>
            </div>
            |
            <div className="col2">
              <p className="mb-0 font-[500]">
                Free Delivery Now On Your First Order and Over $200
              </p>
            </div>
            |<p className="col3 text-[25px] font-bold">- Only $200</p>
          </div>
          <AdsBannerSlider items={4} />
        </div>
      </section>






      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Home;
