import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

import { crudDataApi } from "./api/crudData";
import { getCaptcha } from "./api/getCaptcha";

const reducer = combineReducers({
    [crudDataApi.reducerPath]: crudDataApi.reducer,
    [getCaptcha.reducerPath]: getCaptcha.reducer,
});

export const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
        .concat(crudDataApi.middleware)
        .concat(getCaptcha.middleware)
    ,
});

setupListeners(store.dispatch);
