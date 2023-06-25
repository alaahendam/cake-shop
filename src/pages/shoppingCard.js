import React from "react";
import ShoppingCardComponent from "@/components/shopping/shoppingCard";
import Checkout from "@/components/shopping/checkout";
import OrderConfirmed from "@/components/shopping/orderConfirmed";
import { useSelector } from "react-redux";
const ShoppingCard = () => {
  const activeProcess = useSelector(
    (state) => state.activeProcess.activeProcess
  );
  const process = {
    shoppingCard: <ShoppingCardComponent />,
    orderConfirmed: <OrderConfirmed />,
    checkout: <Checkout />,
  };
  return <div>{process[activeProcess]}</div>;
};
export default ShoppingCard;
