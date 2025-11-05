import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reduxSlices/CounterSlice";

export const store = configureStore({
    reducer: {
        counterReducer
    }
})