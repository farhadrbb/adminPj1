import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {baseQuery} from "../../baseUrl";

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery:  fetchBaseQuery({ baseUrl: 'http://193.151.139.79:8082/api/v1/RegisterInformation/' }),
    endpoints: (builder) => ({

        sendotp: builder.mutation({
            query: (info) => ({
                url: `SendOtp`,
                method: "POST",
                params:info
            }),
        }),
        sendotpCode: builder.mutation({
            query: (info) => ({
                url: `checkotpbyMobile`,
                method: "POST",
                params:info
            }),
        }),
        sejamCode: builder.query({
            query: (infoSejam) => ({
                url: `CheckotpbyNationalCode`,
                method: "get",
                params:infoSejam
            }),
        }),

        

    }),
});


export const {
 useSendotpMutation,
 useSendotpCodeMutation,
 useLazySejamCodeQuery
} = authApi;
