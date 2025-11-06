import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reduxSlices/CounterSlice";
import userReducer from "./reduxSlices/UserSlice";

export const store = configureStore({
    reducer: {
        counterReducer,
        userReducer
    }
})