import { configureStore } from "@reduxjs/toolkit";
import { advertsReducer } from "./adverts/advertsSlice";
import { filterReducer } from "./filter/filterSlice";

export const store = configureStore({
  reducer: {
    adverts: advertsReducer,
    filter: filterReducer,
  },
});
