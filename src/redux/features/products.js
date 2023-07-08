import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  productsNum: 0,
  categories: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProducts: (state, action) => {
      state.products = action.payload.filtered_products;
      state.productsNum = action.payload.productsNum;
    },
    addCategories: (state, action) => {
      state.categories = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addProducts, addCategories } = productsSlice.actions;

export default productsSlice.reducer;
