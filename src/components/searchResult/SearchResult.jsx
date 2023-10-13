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
        <div>
          <h1></h1>
        </div>
      )}

      {
        searchValue && (
          <div className="flex flex-wrap pb-[12px] px-[--px]">
      {productSliderData.map((data, index) => (
        <ProductCard
          key={index}
          arrayData={data}
          contCn={"w-1/5 mt-[14px] md:mt-[19px]"}
          buttonStyle={{ display: "none" }}
        />
      ))}

      {productListData.map((category, categoryIndex) =>
        category.products.map((product, productIndex) => (
          <ProductCard
            key={productIndex}
            arrayData={product}
            contCn={"w-1/5 mt-[14px] md:mt-[19px]"}
            buttonStyle={{ display: "none" }}
          />
        ))
      )}
    </div>
        )
      }
    </>
  );
};

export default SearchResult;
