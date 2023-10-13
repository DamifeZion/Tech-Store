import React from "react";
import Navbar from "../components/navbar/Navbar";
import LisitngHeroSlider from "../components/listingHeroSlider/LisitngHeroSlider";
import ProductSlider from "../components/productSlider/ProductSlider";
import zipImg from "../assets/zip.svg";
import { Link } from "react-router-dom";
import ProductList from "../components/productSlider/ProductList";
import { productListData } from "../data/listingPage/productListData";
import { sponsorsLogoData } from "../data/listingPage/sponsorsLogoData";
import ListingSponsorImg from "../components/listingSponsorImg/ListingSponsorImg";
import LisitingFollowPost from "../components/listingFollowPost/LisitingFollowPost";
import { lisitingFollowPost } from "../data/listingPage/lisitingFollowPost";

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

        <div
          id="product-list-1"
          className="template flex flex-col gap-3 mt-[14px] lg:px-[--px] 1400:px-0"
        >
          {productListData.map((data, index) => (
            <ProductList key={index} arrayData={data} />
          ))}
        </div>
      </div>

      <div
        id="sponsors"
        className="template mt-[31px] px-[--px] flex flex-wrap justify-center 400:justify-between 500:px-0 gap-1 md:justify-center "
      >
        {sponsorsLogoData.map((data, index) => (
          <ListingSponsorImg key={index} arrayData={data} />
        ))}
      </div>

      <div
        id="follow-us"
        className="template px-[--px] my-10 hidden mt-[42px] flex-col flex-wrap lg:flex 1400:px-0"
      >
        <h1 className="text-[22px] font-semibold leading-tight">
          Follow us on Instagram for News, Offers & More
        </h1>

        <div
          id="follow-us-posts"
          className="flex flex-wrap 1300:gap-[4px]"
        >
          {lisitingFollowPost.map((data, index) => (
            <LisitingFollowPost key={index} arrayData={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Listing;
