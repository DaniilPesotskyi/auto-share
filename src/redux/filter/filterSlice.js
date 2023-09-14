import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  brand: "",
  price: "",
  from: null,
  to: null,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setBrandFilter(state, { payload }) {
      state.brand = payload;
    },
    setPriceFilter(state, { payload }) {
      state.price = payload;
    },
    setFromFilter(state, { payload }) {
      state.from = payload;
    },
    setToFilter(state, { payload }) {
      state.to = payload;
    },
  },
});

export const { setBrandFilter, setPriceFilter, setFromFilter, setToFilter } =
  filterSlice.actions;
export const filterReducer = filterSlice.reducer;
