import { createSlice } from "@reduxjs/toolkit";

export const mobileNavSlice = createSlice({
  name: "mobileMainMenu",

  initialState: {
    mainMenuVisibility: false,
  },

  reducers: {
    mainMenuToggle: (state) => {
      state.mainMenuVisibility = !state.mainMenuVisibility;
    },
  },
});
