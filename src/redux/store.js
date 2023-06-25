import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./features/user";
import activeProcessReducer from "./features/activeProcess";
export const store = configureStore({
  reducer: {
    user: UserReducer,
    activeProcess: activeProcessReducer,
  },
});
