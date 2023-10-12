import { useDispatch } from "react-redux";
import { mobileNavSlice } from "../features/slices/mobileNavSlice";

export const mobileNavUtil = () => {
  const dispatch = useDispatch();

  const mainMenuToggle = () => {
    dispatch(mobileNavSlice.actions.mainMenuToggle());
  };

  return {
    mainMenuToggle,
  };
};
