import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {baseQuery} from "../../baseUrl";

export const crudDataApi = createApi({
    reducerPath: "crudDataApi",
    // baseQuery:  fetchBaseQuery({ baseUrl: 'http://193.151.139.79:8082/api/v1/' }),
    baseQuery:  baseQuery,
    endpoints: (builder) => ({
        getData: builder.query({
            query: (infoApi) => {
                return {
                    url: `${infoApi.url}`,
                    // params: infoApi.filter,
                };
            },
        }),

        postData: builder.mutation({
            query: (infoApi) => ({
                url: `${infoApi.url}`,
                method: "POST",
                params: infoApi.filter || undefined,
                body: infoApi.body || undefined,
            }),
        }),

    }),
});

export const {
    useLazyGetDataQuery,
    useGetDataQuery,
    usePostDataMutation
} = crudDataApi;
