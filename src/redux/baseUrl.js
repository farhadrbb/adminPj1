import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query";

const baseUtils = fetchBaseQuery({
  baseUrl: "http://193.151.139.79:8082/api/v1/",

  prepareHeaders: (headers, { getState }) => {
    const token = localStorage.getItem("auth");

    // If we have a token set in state, let's assume that we should be passing it.
    // if (token) {
      headers.set(
        "authorization",
        `Bearer eyJhbGciOiJBMTI4S1ciLCJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwidHlwIjoiSldUIn0.IBn5-LQkE4jjzgr1PUZzxHrPq4cbCEVsFCA2dRC95N5cwkPpNL4q-w.F8n0dv9K_g10nZCfCZb0ng.LKFwx7L3AEKWxPKJpC3Jc1F6pxUKEY1NqFsnR2Z6olyTe2iEjE-BkjCkUq6UV5vUCp9B85kIh2RYjSHa4hSs3TEuYrEz-moZIrSB1_OblyiQ7iBrR6bS4xZsOiVDIl4Q2hTueKip1DsirCRUD5UbuqXXH12pZkOOp4M8zSHv4EXwU7WWI77SGp3nLbFo_LPvkAtlG0d7V0oPkBpiomX_4YhJbR6wmsy-_jBPjmbuqymchDixqfI--_sZaYOaA49TKB7wHTncEkVFcEZCozC0dNrtl7o77HawjWzfTjuxkaMCeoTds_6mzorR-v3-bROiQiTzaoI63UMxt2cQ-qIWDnxDvcX6ROmmRRt8ypDYUDE91bC2nVpi2QCxJhzcv5c2qC7XcIzrYdY-ZVF771sYMPvzPzfY-sGLtsEmffFj-ga9Pp0vupcwd8hAQ52TSDlvKJ2RKAY2wz0CtyC1bC_TikK2qxIODXsWXS6TEUF73dxNso-w0dDks8m34Hpw_fGr7-Dy3WNV4pGQRDW21kJjJprmjQEXN3osYiCNLiLeJ95HJ5oafJHvZ4nYxS5jMLs6xYluzwAA5GnQNFbDWUk0enrZ_Rts0myaA3SEd6melWlF74oX2YbqKcdYN4SAuxu1edLS7Lyyui95zVzMlXF1PAFYqMphGHbvhUlGQCO6eAhDFdXDpBZEfc54YH33dA5pIbhX-9UihubV2iEg4RipUQyWZQtCnCr_7iuOQTbeHmXJyF5mnfANao35PfhNEKbxawhfd-vCMQVVM1Tw_EGR4XmeRoveBBgrHyxybl88_AzV6Pu-bhN1cVCe-pB3_f1q0V6U0l1F5z-JL3NXq2DPWqK-Krznyl6aHAhkx7txO00c_1jD-rbRYry12A_ziUq4TDn7qXEZOQ4MqOAAi_aFJ9IaVAzsDQQv6LmEBv6E982wN82Env0nqpbWPyRTJDh-Lsv-bJceBx04nq-s-Vj8Kg.Dj80MD1Ps7oi09SbtVvX_g`
      );
    // }

    return headers;
  },
});

export const baseQuery = async (args, api, extraOptions) => {
  let result = await baseUtils(args, api, extraOptions);

//   if (result.error && result.error.status === 401) {
//     window.location.href = "/login";
//   }
  return result;
};
