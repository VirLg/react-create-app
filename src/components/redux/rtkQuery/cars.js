import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

console.log('first', process.env.REACT_APP_BASE_URL);
export const carsApi = createApi({
  reducerPath: 'carsRtk',

  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
  }),
  tagTypes: ['TagCar'],
  endpoints: builder => ({
    getCars: builder.query({
      query: () => `/catalog`,
      providesTags: ['TagCar'],
    }),
    addCar: builder.mutation({
      query: body => ({
        url: `/add`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['TagCar'],
    }),
    deleteCar: builder.mutation({
      query: id => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['TagCar'],
    }),
  }),
});

export const { useGetCarsQuery, useAddCarMutation, useDeleteCarMutation } =
  carsApi;
