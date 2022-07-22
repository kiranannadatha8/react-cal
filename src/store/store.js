import { configureStore } from "@reduxjs/toolkit";
import calReducer from "../features/calSlice";

export const store = configureStore({
  reducer : {
    cal: calReducer
  }
})