import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query";

const baseUtils = fetchBaseQuery({
  baseUrl: "http://195.226.223.100:8082/api/",

  prepareHeaders: (headers, { getState }) => {
    const token = sessionStorage.getItem("auth");


    if (token) {
      headers.set(
        "Authorization",
        `Bearer ${token}`
      );
    }

    // headers.set("Access-Control-Allow-Origin", "*")
    // headers.set("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS")
    // headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With")



    return headers;
  },
});

export const baseQuery = async (args, api, extraOptions) => {
  let result = await baseUtils(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    alert('دوباره لاگین کنید')
    sessionStorage.removeItem("auth")
    
  }
  return result;
};
