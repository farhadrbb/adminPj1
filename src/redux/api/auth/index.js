import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../../baseUrl";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: 'http://hamiapi.atabaifekri.ir/api/' }),
  // baseQuery,
  endpoints: (builder) => ({
    auth: builder.query({
      query: (infoApi) => ({
        url: `${infoApi.url}`,
        method: "POST",
        // params: infoApi.filter || undefined,
        body: infoApi.body || undefined,

      }),
    }),
  }),
});

export const {
  useLazyAuthQuery
} = authApi;

