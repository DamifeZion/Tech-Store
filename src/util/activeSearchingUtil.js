import { useSelector } from "react-redux";

export const activeSearchingUtil = () => {
  const { searchValue } = useSelector((state) => state.desktopNavSlice);

  const handleSearchVisibility = () => {
    return searchValue ? "block" : "hidden";
  };

  const handleMainVisibility = () => {
    return !searchValue ? "block" : "hidden";
  };

  return {
    handleSearchVisibility,
    handleMainVisibility,
  };
};
