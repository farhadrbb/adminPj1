import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {baseQuery} from "../../baseUrl";

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery:  fetchBaseQuery({ baseUrl: 'http://193.151.139.79:8083/api/v1/RegisterInformation/' }),
    endpoints: (builder) => ({

        sendotp: builder.mutation({
            query: (mobile) => ({
                url: `SendOtp?mobile=${mobile}`,
                method: "POST",
            }),
        }),
        sendotpCode: builder.mutation({
            query: (infoOtp) => ({
                url: `checkotpbyMobile?otp=${infoOtp.otp}&mobile=${infoOtp.mobile}&nationalCode=${infoOtp.nationalCode}`,
                method: "POST",
            }),
        }),
        sejamCode: builder.mutation({
            query: (infoSejam) => ({
                url: `CheckotpbyNationalCode?otp=${infoSejam.otp}&nationalCode=${infoSejam.nationalCode}`,
                method: "POST",
            }),
        }),

    }),
});


export const {
 useSendotpMutation,
 useSendotpCodeMutation,
 useSejamCodeMutation
} = authApi;
