import { configureStore } from "@reduxjs/toolkit";
import { advertsReducer } from "./adverts/advertsSlice";

export const store = configureStore({
  reducer: {
    adverts: advertsReducer,
  },
});
