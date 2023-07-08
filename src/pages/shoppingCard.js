import React, { useEffect } from "react";
import ShoppingCardComponent from "@/components/shopping/shoppingCard";
import Checkout from "@/components/shopping/checkout";
import OrderConfirmed from "@/components/shopping/orderConfirmed";
import { useSelector, useDispatch } from "react-redux";
import { addCartData } from "@/redux/features/cart";
import API from "../utilities/api";
const ShoppingCard = () => {
  const activeProcess = useSelector(
    (state) => state.activeProcess.activeProcess
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      console.log("hello this cart endpoint");
      const { data } = await API.get("/orders/cart/");
      console.log(data);
      dispatch(addCartData(data?.cart));
    };
    fetchData();
  }, []);
  const process = {
    shoppingCard: <ShoppingCardComponent />,
    orderConfirmed: <OrderConfirmed />,
    checkout: <Checkout />,
  };
  return <div>{process[activeProcess]}</div>;
};
export default ShoppingCard;
