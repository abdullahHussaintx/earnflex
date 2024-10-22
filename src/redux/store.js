import { configureStore } from "@reduxjs/toolkit";
import navBarSlice from "./navBarSlice";
import activationCodeSlice from "./activationCodeSlice";
import task1Slice from "./task1Slice";
import task3Slice from "./task3Slice";

export const store = configureStore({
  reducer: {
    navBarSlice,
    activationCodeSlice,
    task1Slice,
    task3Slice,
  },
});
