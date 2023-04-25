import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./slices/itemSlice";
import authSlice from "./slices/authSlice";

export const store = configureStore({
  reducer: { itemSlice, authSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
