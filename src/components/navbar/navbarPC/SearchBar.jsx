import React from "react";
import search from "../../../assets/searchPC.svg";
import { desktopNavUtil } from "../../../util/desktopNavUtil";

const SearchBar = () => {
  const {handleSearchChange} = desktopNavUtil()

  return (
    <div className="relative w-[78%] h-[55px] overflow-hidden rounded-[31px] 1200:w-[80%] 1400:w-[83%]">
      <input type="text" 
        onChange={handleSearchChange}
        placeholder="Search entire store here..."
        className="w-full h-full pl-[30px] pr-[55px] text-[--black] placeholder:text-[--col5] bg-[--col1] text-sm 1200:text-md"
      />

      <i className="absolute top-1/2 -translate-y-1/2 right-[26px]">
        <img src={search} alt="" />
      </i>
    </div>
  );
};

export default SearchBar;
