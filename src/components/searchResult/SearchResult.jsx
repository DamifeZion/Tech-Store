import React from "react";
import { useIsSearching } from "../../hooks/useIsSearching";
import { useSelector } from "react-redux";
import ProductCard from "../productSlider/ProductCard";

const SearchResult = () => {
  useIsSearching();

  const { filteredProducts } = useSelector((state) => state.desktopNavSlice);

  return (
    <div className="flex border border-red-600 py-[12px] md:mt-[19px]">
      <ProductCard />
    </div>
  );
};

export default SearchResult;
