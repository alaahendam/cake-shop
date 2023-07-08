import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: {},
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartData: (state, action) => {
      state.cart = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addCartData } = cartSlice.actions;

export default cartSlice.reducer;
