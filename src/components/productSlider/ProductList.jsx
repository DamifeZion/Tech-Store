import React from "react";
import customBuilds from "../../assets/customBuilds.png";
import ProductCard from "./ProductCard";
import { productListData } from "../../data/listingPage/productListData";
import { Link, NavLink } from "react-router-dom";
import { useMediaQuery } from "@mui/material";

const ProductList = ({ arrayData }) => {
  const isMediumScreen = useMediaQuery("(min-width: 768px)");

  const largeScreenbanner = () => {
    return (
      <div
        id="image"
        className="border border-yellow-600 relative w-[228px] h-full"
      >
        <img
          src={arrayData.banner.img}
          alt=""
          className="w-full h-full object-cover"
        />

        <>
          <h1 className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 font-bold text-[--white] max-w-[230px] text-center text-[18px] lg:text-[22px] ">
            {arrayData.banner.header}
          </h1>
          <Link className="underline absolute bottom-[31px] text-[13px] left-1/2 -translate-x-1/2 text-[--white] w-full text-center">
            {arrayData.banner.link}
          </Link>
        </>
      </div>
    );
  };

  const smallScreenBanner = () => {
    return (
      <div className="mb-[14px]">
        <div id="image" className="relative w-full h-[82px] 500:h-[100px]">
          <img
            src={arrayData.banner.img}
            alt=""
            className="w-full h-full object-cover"
          />

          <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-[--white]">
            <h1 className="font-bold text-lg 400:text-[18px] text-center">
              {arrayData.banner.header}
            </h1>
            <Link>
              <p className="text-sm text-center underline mt-1 500:mt-2">
                {arrayData.banner.link}
              </p>
            </Link>
          </div>
        </div>

        {arrayData.slideMenu && (
          <div
            id="slide-menu"
            className={`mt-4 flex flex-col text-md font-semibold`}
          >
            <div
              id="slide-menu-1"
              className="flex flex-wrap items-center gap-2 400:gap-4 "
            >
              <button className="text-[--black] text-sm border-b-2 pb-[3px] border-[--col3] 400:text-md">
                {arrayData.slideMenu.item1}
              </button>
              <button className="text-[#838383]">
                {arrayData.slideMenu.item2}
              </button>
              <button className="text-[#838383]">
                {arrayData.slideMenu.item3}
              </button>
              <button className="text-[#838383]">
                {arrayData.slideMenu.item4}
              </button>
            </div>
          </div>
        )}
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
          {arrayData.products.map((data, index) => (
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
