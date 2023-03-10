import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

import { crudDataApi } from "./api/crudData";
import { getCaptcha } from "./api/getCaptcha";
import { authApi } from "./api/auth";
import authSlice from "./slices/authSlice";

const reducer = combineReducers({
    [crudDataApi.reducerPath]: crudDataApi.reducer,
    [getCaptcha.reducerPath]: getCaptcha.reducer,
    [authApi.reducerPath]: authApi.reducer,
    authSlice
});

export const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
        .concat(crudDataApi.middleware)
        .concat(getCaptcha.middleware)
        .concat(authApi.middleware)
    ,
});

setupListeners(store.dispatch);
