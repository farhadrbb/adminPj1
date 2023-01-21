import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

import { crudDataApi } from "./api/crudData";

const reducer = combineReducers({
    [crudDataApi.reducerPath]: crudDataApi.reducer,
});

export const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(crudDataApi.middleware)
    ,
});

setupListeners(store.dispatch);
