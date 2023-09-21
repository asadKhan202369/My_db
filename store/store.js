import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "@/store/reducers/movieReducer";

export const store = configureStore({
    reducer:{
        movieReducer,
   },
});