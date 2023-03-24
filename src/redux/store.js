import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { getAllAData } from "./api/getAllData";
import { authApi } from "./api/auth";
import buyBox from "./slices/buyBox";

const reducer = combineReducers({

    [getAllAData.reducerPath]: getAllAData.reducer,
    [authApi.reducerPath]: authApi.reducer,
    buyBox
});

export const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(getAllAData.middleware)
            .concat(authApi.middleware)
    ,
});

setupListeners(store.dispatch);
