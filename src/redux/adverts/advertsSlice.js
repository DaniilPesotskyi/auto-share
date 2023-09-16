import { createSlice } from "@reduxjs/toolkit";
import { fetchAdverts } from "./operations";

const initialState = {
  items: [],
  page: 1,
  favorites: [],
  isLoading: false,
  error: null,
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const advertsSlice = createSlice({
  name: "adverts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdverts.fulfilled, (state, { payload }) => {
        state.page = state.page + 1;
        state.isLoading = false;
        state.error = null;
        state.items = [...state.items, ...payload];
      })
      .addMatcher((action) => action.type.endsWith("/pending"), handlePending)
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        handleRejected
      );
  },
  reducers: {
    addFavorite: (state, { payload }) => {
      state.favorites.push(payload);
    },
    removeFavorite: (state, { payload }) => {
      state.favorites = state.favorites.filter((item) => item.id !== payload);
    },
  },
});

export const advertsReducer = advertsSlice.reducer;

export const { addFavorite, removeFavorite } = advertsSlice.actions;
