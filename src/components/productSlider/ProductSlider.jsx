import React from "react";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import { productSliderUtil } from "../../util/productSliderUtil";
import prevBtn from "../../assets/productSliderPrevBtn.svg";
import nextBtn from "../../assets/productSliderNextBtn.svg";
import { productSliderData } from "../../data/listingPage/productSliderData";

const ProductSlider = ({ headerTitle, headerRight }) => {
  const sliderBtnStyle =
    "absolute top-1/2 -translate-y-1/2 z-[1] items-center w-[47px] h-[79px] hidden lg:flex";

  const { scrollToPreviousSlide, scrollToNextSlide } = productSliderUtil();

  return (
    <div id="template">
      <h1
        id="header"
        className={`text-[22px] flex items-center font-semibold mt-[37px]`}
      >
        {headerTitle}
        <Link
          className={` ml-auto text-[--col3] text-xsm font-normal underline lg:text-[13px]`}
        >
          {headerRight}
        </Link>
      </h1>

      <div className="relative">
        <button
          onClick={scrollToPreviousSlide}
          className={`${sliderBtnStyle} left-0`}
        >
          <img src={prevBtn} alt="previous" />
        </button>

        <button
          onClick={scrollToNextSlide}
          className={`${sliderBtnStyle} right-0`}
        >
          <img src={nextBtn} alt="next" />
        </button>

        <div
          id="product-slider"
          className="hide-scroll-bar relative flex gap-[5px] py-[14px] overflow-x-auto px-[6px] h-[420px] lg:overflow-x-hidden"
        >
          {productSliderData.map((data, index) => (
            <ProductCard
              key={index}
              id="product-slide-item"
              arrayData={data}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;
