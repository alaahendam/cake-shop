import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./features/user";
export const store = configureStore({
  reducer: {
    user: UserReducer,
  },
});
