import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Products {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: { rate: number; count: number };
  title: string;
}

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakestoreapi.com/",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<Products[], void>({
      query: () => ({
        url: "products",
      }),
    }),
  }),
});

export const { useGetProductsQuery } = productApi;
