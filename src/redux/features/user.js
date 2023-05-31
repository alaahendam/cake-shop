import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addLoginUser: (state, action) => {
      state.user = action.payload.user;
      typeof window !== "undefined"
        ? localStorage.setItem("gloriousToken", action.payload.token)
        : null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addLoginUser } = userSlice.actions;

export default userSlice.reducer;
