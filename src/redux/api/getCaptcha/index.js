import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {baseQuery} from "../../baseUrl";

export const getCaptcha = createApi({
    reducerPath: "getCaptcha",
    baseQuery:  fetchBaseQuery({ baseUrl: 'https://193.151.139.79/api/v1/Account/' }),
    endpoints: (builder) => ({
        getCaptchaApi: builder.query({
            query: (url) => {
                return {
                    url: `${url}`,
                    // params: infoApi.filter,
                };
            },
        }),

       

    }),
});

export const {
    useLazyGetCaptchaApiQuery
} = getCaptcha;
