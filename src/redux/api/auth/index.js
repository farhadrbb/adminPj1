import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../../baseUrl";

export const authApi = createApi({
  reducerPath: "authApi",
  // baseQuery:  fetchBaseQuery({ baseUrl: 'http://193.151.139.79:8082/api/' }),
  baseQuery,
  endpoints: (builder) => ({
    validateCustomer: builder.mutation({
      query: (info) => ({
        url: `ValidCustomer`,
        method: "POST",
        body: info,
        headers: {
          accept: "text/plain",
        },
      }),
    }),
    sendotp: builder.mutation({
      query: (info) => ({
        url: `UserOtp`,
        method: "POST",
        body: info,
        headers: {
          accept: "text/plain",
          "Content-Type": "application/json-patch+json",
        },
      }),
    }),
    sendotpCode: builder.mutation({
      query: (info) => ({
        url: `UserReg/AskOtp`,
        method: "POST",
        body: info,
        headers: {
          accept: "text/plain",
          "Content-Type": "application/json-patch+json",
        },
      }),
    }),
    sejamCode: builder.query({
      query: (infoSejam) => ({
        url: `CheckotpbyNationalCode`,
        method: "get",
        params: infoSejam,
      }),
    }),
    getUserProfile: builder.mutation({
      query: (infoSejam) => ({
        url: `UserReg/GetUserProfile`,
        method: "post",
        body: infoSejam,
      }),
    }),

    getCustomerFile: builder.mutation({
      query: (info) => ({
        url: `CustomerFile`,
        method: "POST",
        body: info,
        headers: {
          accept: "text/plain",
          "Content-Type": "application/json-patch+json",
        },
      }),
    }),
  }),
});

export const {
  useSendotpMutation,
  useSendotpCodeMutation,
  useLazySejamCodeQuery,
  useValidateCustomerMutation,
  useGetCustomerFileMutation,
  useGetUserProfileMutation,
} = authApi;

