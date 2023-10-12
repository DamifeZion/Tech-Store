import React from "react";
import Navbar from "../components/navbar/Navbar";
import LisitngHeroSlider from "../components/listingHeroSlider/LisitngHeroSlider";
import ProductSlider from "../components/productSlider/ProductSlider";
import zipImg from "../assets/zip.svg";
import { Link } from "react-router-dom";
import ProductList from "../components/productSlider/ProductList";

const Listing = () => {
  return (
    <div>
      <Navbar />
      <div className="mx-[--px] mt-[12px] md:mt-[19px] lg:mt-0 lg:mx-0">
        <LisitngHeroSlider />
      </div>

      <div id="new-products" className="px-[--px] mt-[14px]">
        <ProductSlider
          headerTitle={"New Products"}
          headerRight={"See all new products"}
        />
      </div>

      <div id="rectangle" className="mx-[--px] lg:mx-0">
        <div className="template w-full py-[15px] bg-[#F5F9FF] text-[#272560] flex flex-col items-center justify-center 700:flex-row 700:h-[60px] 700:gap-3 lg:h-[70px]">
          <img
            src={zipImg}
            alt="zip"
            className="w-[37px] 700:w-[48px] lg:w-[77px]"
          />

          <span className="hidden 700:block 700:border 700:h-[16.5px] 700:border-[#00AEB8] lg:h-[23px]" />

          <p className="mt-[15px] text-sm flex items-center 700:mt-0 700:gap-1 700:text-md lg:text-xl">
            <b className="font-semibold">own</b>
            <span>it now, up to 6 months interest free</span>
          </p>

          <Link className="mt-[10px] underline text-md 700:mt-0">
            learn more
          </Link>
        </div>

        <div id="product-list-1" className="template mt-[14px] mb-10 lg:px-[--px] 1400:px-0">
          <ProductList />
        </div>
      </div>
    </div>
  );
};

export default Listing;
