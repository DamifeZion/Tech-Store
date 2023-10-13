import { useDispatch, useSelector } from "react-redux";
import { desktopNavSlice } from "../features/slices/desktopNavSlice";

export const desktopNavUtil = () => {
  const dispatch = useDispatch();
  const { searchValue } = useSelector((state) => state.desktopNavSlice);

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
