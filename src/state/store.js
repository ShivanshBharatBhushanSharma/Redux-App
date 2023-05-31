import { applyMiddleware, createStore } from "redux";
import reducers from "./reducers";
import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";

// 'createStore' is deprecated so we are using configureStore
// export const store = createStore(reducers, {}, applyMiddleware(thunk));
export const store = configureStore({reducer:reducers, middleware:(getDefaultMiddleware) => getDefaultMiddleware(), preloadedState:{}});
