import React from "react";
import { useIsSearching } from "../../hooks/useIsSearching";
import { productListData } from "../../data/listingPage/productListData";
import ProductCard from "../productSlider/ProductCard";
import { productSliderData } from "../../data/listingPage/productSliderData";
import { useSelector } from "react-redux";

const SearchResult = () => {
  useIsSearching();
  const { searchValue } = useSelector((state) => state.desktopNavSlice);
  
  
  return (
    <>
      {!searchValue && (
        <div className="w-full h-64 flex items-center justify-center lg:text-[1.5rem] md:text-[2rem]">
          <p>No Results Found</p>
        </div>
      )}

      {searchValue && (
        <div className="flex flex-wrap pb-[12px] px-[--px]">
          {productSliderData.map((data, index) => (
            <ProductCard
              key={index}
              arrayData={data}
              contCn={"w-[200px] mt-[14px] md:mt-[19px] lg:w-1/5"}
              buttonStyle={{ display: "none" }}
            />
          ))}

          {productListData.map((category, categoryIndex) =>
            category.products.map((product, productIndex) => (
              <ProductCard
                key={productIndex}
                arrayData={product}
                contCn={"w-[200px] mt-[14px] md:mt-[19px] lg:w-1/5"}
                buttonStyle={{ display: "none" }}
              />
            ))
          )}
        </div>
      )}
    </>
  );
};

export default SearchResult;
