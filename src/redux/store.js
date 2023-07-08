import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./features/user";
import activeProcessReducer from "./features/activeProcess";
import productsReducer from "./features/products";
import cartNumReducer from "./features/cartNum";
import cartReducer from "./features/cart";
export const store = configureStore({
  reducer: {
    user: UserReducer,
    activeProcess: activeProcessReducer,
    products: productsReducer,
    cartNum: cartNumReducer,
    cart: cartReducer,
  },
});
