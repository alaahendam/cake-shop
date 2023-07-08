import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartNum: 0,
};

export const cartNumSlice = createSlice({
  name: "cartNum",
  initialState,
  reducers: {
    addCartNum: (state, action) => {
      state.cartNum = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addCartNum } = cartNumSlice.actions;

export default cartNumSlice.reducer;
