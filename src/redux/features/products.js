import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  productsNum: 0,
  categories: [],
  allOrders: {},
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
    addAllOrders: (state, action) => {
      state.allOrders = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addProducts, addCategories, addAllOrders } =
  productsSlice.actions;

export default productsSlice.reducer;
