import { createSlice } from "@reduxjs/toolkit";

export const desktopNavSlice = createSlice({
  name: "navigationSearch",

  initialState: {
    searchVisibility: false,
    searchValue: "",
    miniCartVisibility: false,
    filteredProducts: [],
  },

  reducers: {
    searchBarToggle: (state) => {
      state.searchVisibility = !state.searchVisibility;
    },

    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },

    miniCartToggle: (state, action) => {
      state.miniCartVisibility = action.payload;
    },

    setFilteredProducts: (state, action) => {
      state.filteredProducts = action.payload;
    },
  },
});
