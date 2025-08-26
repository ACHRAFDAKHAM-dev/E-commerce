import React from "react";
import { LiaShippingFastSolid } from "react-icons/lia";
import AdsBannerSlider from "../AdsBannerSlider/AdsBannerSlider";





const FreeShipping: React.FC = () => {
  return (
    <section className="py-16  bg-white">
      <div className="container">
        <div className="freeShipping max-w-5xl mx-auto p-6 border border-t-red-500 flex items-center justify-between rounded-md bg-gray-50 shadow-sm">
          
          {/* column 1 */}
          <div className="flex items-center gap-4">
            <LiaShippingFastSolid className="text-5xl text-red-500" />
            <span className="text-xl font-semibold uppercase pr-6">
              Free Shipping  
            </span>
          </div>

          {/* column 2 */}
          <div className="px-6 border-l border-gray-300 flex-1">
            <p className="mb-0 font-medium text-gray-700 text-center">
              Free Delivery Now On Your First Order and Over $200
            </p>
          </div>

          {/* column 3 */}
          <div className="px-6 border-l border-gray-300">
            <p className="text-2xl font-bold text-red-600">
              - Only $200
            </p>
          </div>
            
          
        </div>
      </div>
      <div className="container">
        
        <AdsBannerSlider items={4}/>
      </div>
    </section>
  );
}

export default FreeShipping;