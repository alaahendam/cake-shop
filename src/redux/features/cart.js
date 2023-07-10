import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: {},
  orders: [],
  ordersPrice: 0,
  cartNum: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartData: (state, action) => {
      state.cart = action.payload;
    },
    addOrders: (state, action) => {
      state.orders = action.payload;
    },
    addOrdersPrice: (state, action) => {
      state.ordersPrice = action.payload;
    },
    addCartNum: (state, action) => {
      state.cartNum = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addCartData, addOrders, addOrdersPrice, addCartNum } =
  cartSlice.actions;

export default cartSlice.reducer;
