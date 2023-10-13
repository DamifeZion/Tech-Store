import { useDispatch, useSelector } from "react-redux";
import { useLayoutEffect, useRef } from "react";
import { desktopNavSlice } from "../features/slices/desktopNavSlice";

export const useIsSearching = () => {
  const { searchValue } = useSelector((state) => state.desktopNavSlice);
  const productsRef = useRef(null);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    const products = document.querySelectorAll("#product");

    const filteredProducts = Array.from(products).map((product) => {
      const productTitle = product.querySelector("#product-title").textContent;
      return { title: productTitle };
    });

    dispatch(desktopNavSlice.actions.setFilteredProducts(filteredProducts));
  }, [searchValue, dispatch]);
};