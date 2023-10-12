import React from "react";
import customBuilds from "../../assets/customBuilds.png";
import ProductCard from "./ProductCard";
import { productListData } from "../../data/listingPage/productListData";
import { NavLink } from "react-router-dom";
import { useMediaQuery } from "@mui/material";

const ProductList = () => {
  const isMediumScreen = useMediaQuery("(min-width: 768px)");

  const largeScreenbanner = () => {
    return (
      <div
        id="image"
        className="border border-yellow-600 relative w-[228px] h-full"
      >
        <img src={customBuilds} alt="" className="w-full h-full object-cover" />

        <>
          <h1 className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 font-bold text-[--white] max-w-[230px] text-center text-[18px] lg:text-[22px] ">
            Custome Builds
          </h1>
          <p className="underline absolute bottom-[31px] text-[13px] left-1/2 -translate-x-1/2 text-[--white] w-full text-center">
            See All Products
          </p>
        </>
      </div>
    );
  };

  const smallScreenBanner = () => {
    return (
      <div
        id="image"
        className="relative w-full h-[82px] mb-[13px]"
      >
        <img src={customBuilds} alt="" className="w-full h-full object-cover" />

        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-[--white]">
          <h1 className="font-bold text-[18px]">
            Custome Builds
          </h1>
          <p className="text-sm text-center underline mt-1">
          See All Products
          </p>
        </div>
      </div>
    );
  };

  return (
    <div>
      {!isMediumScreen && smallScreenBanner()}

      <div className="flex items-center justify-between h-[346px] lg:gap-1">
        {isMediumScreen && largeScreenbanner()}

        <div
          id="product-item"
          className="hide-scroll-bar h-full px-[6px] py-[2px] grid grid-flow-col overflow-x-auto md:w-[84%] lg:gap-1 lg:overflow-hidden"
        >
          {productListData.map((data, index) => (
            <ProductCard
              key={index}
              arrayData={data}
              btnStyle={"group-hover:hidden"}
              contCn={"w-[228px] 1400:w-[235px]"}
              iconSpanCn="invisible"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
