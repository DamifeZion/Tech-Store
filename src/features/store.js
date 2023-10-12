import { configureStore } from "@reduxjs/toolkit";
import { desktopNavSlice } from "./slices/desktopNavSlice";
import { mobileNavSlice } from "./slices/mobileNavSlice";

export const store = configureStore({
  reducer: {
    desktopNavSlice: desktopNavSlice.reducer,
    mobileNavSlice: mobileNavSlice.reducer,
  },
});
