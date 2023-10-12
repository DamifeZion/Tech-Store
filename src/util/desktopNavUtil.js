import { useDispatch } from "react-redux";
import { desktopNavSlice } from "../features/slices/desktopNavSlice";

export const desktopNavUtil = () => {
  const dispatch = useDispatch();

  const searchBarToggle = () => {
    dispatch(desktopNavSlice.actions.searchBarToggle());
  };

  const handleSearchChange = (e) => {
    dispatch(desktopNavSlice.actions.setSearchValue(e.target.value));
  };

  const miniCartToggleTrue = () => {
    dispatch(desktopNavSlice.actions.miniCartToggle(true));
  };

  const miniCartToggleFalse = () => {
    dispatch(desktopNavSlice.actions.miniCartToggle(false));
  };

  return {
    searchBarToggle,
    handleSearchChange,
    miniCartToggleTrue,
    miniCartToggleFalse,
  };
};
