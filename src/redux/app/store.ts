import { configureStore, Dispatch } from "@reduxjs/toolkit";
import cartReducer from "../feature/cartSlice";
// ...

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

// Infer the `RootState` and `Dispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = Dispatch;
