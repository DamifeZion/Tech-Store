import { useEffect } from "react";
import { useSelector } from "react-redux";

export const useIsSearching = () => {
  const { searchValue } = useSelector((state) => state.desktopNavSlice);

  useEffect(() => {

  }, [searchValue])
};
