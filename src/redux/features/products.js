import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  productsNum: 0,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProducts: (state, action) => {
      state.products = action.payload.filtered_products;
      state.productsNum = action.payload.productsNum;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addProducts } = productsSlice.actions;

export default productsSlice.reducer;
