import { configureStore } from "@reduxjs/toolkit";
import cartProductSlice from "./features/cart/CartSlise";

export const store = configureStore({
  reducer: {
    cart: cartProductSlice,
  },
});
