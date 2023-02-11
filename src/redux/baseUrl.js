import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query";

const baseUtils = fetchBaseQuery({
  baseUrl: "https://apietebari.dnovinbr.ir/api/",

  prepareHeaders: (headers, { getState }) => {
    const token = localStorage.getItem("auth");

    // If we have a token set in state, let's assume that we should be passing it.
    // if (token) {
    headers.set(
      "Authorization",
      `Bearer eyJhbGciOiJBMTI4S1ciLCJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwidHlwIjoiSldUIn0.GfQGcQUO67mvFGfU__fdzAX2V8eofMQV818iInqKlHWHje6-rYD4zw.wzYvnNUYsHGRnd5EKdbeRQ.32lupPAPzMFzbqN_smmoLRIiDdjMzSciebSxKmk_c1AcyzIwAaWIIdUt5KOHS0N3GmIsIBh9WQnGahxmCqkX9Cir6lxLZylVoXGIZ7aiAW3dxqAPd6mEdOrJhfO3wV_5CBYHZ_i4-AFV2Obr-379vDKcGklVr6eKq4blDSDwsChYElDRSEohWEMwkBfGT9Pi6oMjBsuQ_5ruwZecd_laOHFITwzE_-aWIA10BgWdjk-H4K9m32fcMteFYSY8gjqKQdOepSVDSvdngJkGC8yE3acKH8r8wooaKPT0jtMBgl5udtvRdiPaedQRrnPxsQXSRZA5DPyTXIknYj-8sm1pbZ-V0OlBtZHVMKRgc_UAhprqPGb5tvT1h_VAlgRkj_rhBvMkjjdgPuGLlQ1mwTv7-iKJQOECEmac-gfTvk7u8JKdNFUq6ub-CETPdXe_V2XvuvzpD_CxFf9BeyQdAF1SWtYi5pt0iGT_XINKZdQyYXo85S30hSj8W3JkmJw3FiL38YkXmLYzVEvJwuIf5mnShhFSwy3fPm3SNKQ5e_e51eo2ca9hrmz1aP80B-hKQLeEdwxG-9XfTgkZJjQe-P6Xr6YiQvxHGxmclfXkkSzOuCThFBgdllYH4KiYXp3tfV3-AixGX4tENa4g6ZWDSRSzv84gnyoBoj_eDP-NlliF7tCi5NIEgA_dhl7m5OP3orkIm_tfzJhUuk8vUz2fg1w8yoGa_ZmmC1rGTxePm1oOvy2MVMQIkn56wvrk_njGVcrSjGEmiUODv2Q3khz_IXrqv_21OdCFyNdXZMQQN69yzhxeyocIap85dG16o1NJDMaE4wogMm4OXzsN1rW7-KuQg3FPHPArOGfZed7kU62v_TFu-_HqQ9yQ57mqxRxg_vrTWI-cGiobfxvTBmQmyDEZOiUjVM65tvgLbrCGXDe4jc8a7sDZC_cyOA_vsGBCtkItkaMjrHKY5yDFdBzpFdUtz-32LDsNaIBdX-2LZtGr3AT-gHO7dNlsFfk1sGrwB02NLyhsOZpbhJL9oNvHVzLqO4L6qereSZrgXRqR0kFiHyE.4JfGDErkG-Xeyvt7wOehNg`
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
