import {fetchBaseQuery} from "@reduxjs/toolkit/dist/query";

const baseUtils = fetchBaseQuery({
    baseUrl: "http://192.168.20.108:3000/admin/v1/",

    prepareHeaders: (headers, { getState }) => {
        const token = localStorage.getItem('auth');

        // If we have a token set in state, let's assume that we should be passing it.
        if (token) {
          headers.set('authorization', `Bearer ${token}`)
        }

        return headers
      },
})

export const baseQuery = async (
    args,
    api,
    extraOptions
) => {
    let result = await baseUtils(args, api, extraOptions);

    if (result.error && result.error.status === 401) {
        window.location.href = '/login'
    }
    return result;
};