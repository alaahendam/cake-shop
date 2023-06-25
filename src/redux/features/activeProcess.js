import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeProcess: "shoppingCard",
};

export const activeProcessSlice = createSlice({
  name: "activeProcess",
  initialState,
  reducers: {
    changeActiveProcess: (state, action) => {
      state.activeProcess = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeActiveProcess } = activeProcessSlice.actions;

export default activeProcessSlice.reducer;
