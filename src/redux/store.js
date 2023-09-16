import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

import {
  persistStore,
  persistReducer,
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";

import { advertsReducer } from "./adverts/advertsSlice";
import { filterReducer } from "./filter/filterSlice";

const advertsPersistConfig = {
  key: "adverts",
  storage,
  whitelist: ["favorites"],
};

export const store = configureStore({
  reducer: {
    adverts: persistReducer(advertsPersistConfig, advertsReducer),
    filter: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);
