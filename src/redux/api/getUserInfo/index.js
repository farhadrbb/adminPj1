import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
export const apiCall = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://192.168.0.30:86/User/",
    }),
    endpoints: (builder) => ({
        getDataUser: builder.query({
            query: (url) => `${url}`,
        }),
        getDataMenu: builder.query({
            query: (id) => `Menu/${id}`,
        }),
    }),
});

export const {
    useGetDataUserQuery,
    useLazyGetDataMenuQuery
} = apiCall;
