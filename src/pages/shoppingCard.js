import React from "react";
import ShoppingCardComponent from "@/components/shopping/shoppingCard";
import Checkout from "@/components/shopping/checkout";
import OrderConfirmed from "@/components/shopping/orderConfirmed";
const ShoppingCard = () => {
  return (
    <div>
      <ShoppingCardComponent />
      <Checkout />
      <OrderConfirmed />
    </div>
  );
};
export default ShoppingCard;
