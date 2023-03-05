import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../../baseUrl";

export const getAllAData = createApi({
  reducerPath: "getAllAData",
  // baseQuery:  fetchBaseQuery({ baseUrl: 'http://193.151.139.79:8082/api/v1/' }),
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getAllData: builder.query({
      query: (infoApi) => {
        return {
          url: `${infoApi}`,
          // params: infoApi.filter,

        };
      },
    }),
    getLinkPay: builder.query({
      query: (infoApi) => {
        return {
          url: `${infoApi}`,
          // params: infoApi.filter,
        };
      },
      
    
    }),


    postAllData: builder.mutation({
      query: (infoApi) => ({
        url: `${infoApi.url}`,
        method: "POST",
        // params: infoApi.filter || undefined,
        body: infoApi.body || undefined,

      }),
    }),
  }),
});

export const { useLazyGetAllDataQuery, usePostAllDataMutation, useLazyGetLinkPayQuery } = getAllAData;
