import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./features/user";
import activeProcessReducer from "./features/activeProcess";
import productsReducer from "./features/products";
export const store = configureStore({
  reducer: {
    user: UserReducer,
    activeProcess: activeProcessReducer,
    products: productsReducer,
  },
});
