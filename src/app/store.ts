import { productApi } from "../features/api/apiSlice";
import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../features/productSlice/productSlice";

export const store = configureStore({
  reducer: {
    filter: productSlice,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: true }).concat(
      productApi.middleware
    ),
});
