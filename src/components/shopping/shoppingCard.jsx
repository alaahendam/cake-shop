import React, { useState, useEffect } from "react";
import Image from "next/image";
import Counter from "../counter";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { changeActiveProcess } from "@/redux/features/activeProcess";
import SelectAllIcon from "@mui/icons-material/SelectAll";
import { addCartData, addOrders, addCartNum } from "@/redux/features/cart";
import toast from "react-hot-toast";
import API from "../../utilities/api";
const ShoppingCardComponent = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const orders = useSelector((state) => state.cart.orders);
  const cartNum = useSelector((state) => state.cart.cartNum);
  const deleteProduct = async (id, price) => {
    try {
      const { data } = await API.delete(`/orders/cart-items/${id}`);
      toast.success(data?.msg);
      dispatch(addCartNum(cartNum - 1));
      dispatch(
        addCartData({
          ...cart,
          totalCartPrice: cart?.totalCartPrice - price,
          cartItems: cart?.cartItems?.filter((item) => item.id != id),
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
  const updateQuantity = async (quantity, id) => {
    try {
      const { data } = await API.put(`/orders/cart-items/${id}`, { quantity });
      toast.success(data?.msg);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex justify-center items-center flex-col py-5">
      <h1 className="text-2xl text-pink-700 font-semibold pb-3">
        shoppingCard
      </h1>
      <table className="text-gray-500">
        <thead>
          <tr className="border-b-2 border-[#ba9169] pb-3 h-14 text-sm md:text-lg">
            <th className="w-[5%] text-blue-400 cursor-pointer">
              <SelectAllIcon
                onClick={() => {
                  if (orders?.length == cart?.cartItems?.length) {
                    dispatch(addOrders([]));
                  } else {
                    dispatch(
                      addOrders(
                        cart?.cartItems?.map((cartItem) => cartItem.id) || []
                      )
                    );
                  }
                }}
              />
            </th>
            <th>Product</th>
            <th>Price</th>
            <th>quantity</th>
            <th>Total</th>
            <th className="w-[5%]"></th>
          </tr>
        </thead>
        <tbody>
          {cart?.cartItems?.map((item, index) => (
            <tr
              className={`border-b-2 border-[#ba9169] text-sm md:text-lg ${
                orders.includes(item?.id) ? "bg-slate-100" : null
              }`}
              key={item?.id}
            >
              <td className="w-[5%]">
                <div className="flex flex-col justify-center items-center">
                  <input
                    type="checkbox"
                    checked={orders.includes(item?.id)}
                    name=""
                    id=""
                    onChange={() => {
                      if (orders.includes(item?.id)) {
                        // Item already exists in the array, remove it
                        dispatch(
                          addOrders(orders.filter((id) => id !== item?.id))
                        );
                      } else {
                        // Item doesn't exist, add it to the array
                        dispatch(addOrders([...orders, item?.id]));
                      }
                    }}
                  />
                </div>
              </td>
              <td
                className="p-3"
                style={{
                  width: "25%",
                }}
              >
                <Image
                  priority
                  src={item?.product?.url}
                  alt="Example Image"
                  width={300}
                  height={400}
                  className="w-full h-20 md:h-32 rounded-md "
                />
              </td>
              <td
                style={{
                  width: "20%",
                }}
              >
                <div className="flex flex-col justify-center items-center">
                  {item?.product?.price}
                </div>
              </td>
              <td
                style={{
                  width: "20%",
                }}
              >
                <div className="flex flex-col justify-center items-center">
                  <Counter
                    count={item?.quantity}
                    callbackF={(quantity) => updateQuantity(quantity, item?.id)}
                  />
                </div>
              </td>
              <td
                style={{
                  width: "20%",
                }}
              >
                <div className="flex flex-col justify-center items-center">
                  {item?.price}
                </div>
              </td>
              <td className="w-[5%]">
                <div className="flex flex-col justify-center items-center">
                  <IconButton
                    onClick={() => deleteProduct(item?.id, item?.price)}
                  >
                    <CloseIcon />
                  </IconButton>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <p>Subtotal : {cart?.totalCartPrice} EGP</p>
        <p>Delivery : 1000 EGP</p>
        <p>Total : {cart?.totalCartPrice + 1000} EGP</p>
      </div>
      <div className="flex justify-center items-center py-5">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.99 }}
          className="border border-pink-700 text-pink-700 h-10 w-48 rounded-md md:w-60 text-xs md:text-sm"
          onClick={() => dispatch(changeActiveProcess("shoppingCard"))}
        >
          CONTINUE SHOPPING
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.99 }}
          className="bg-pink-700 text-white h-10 w-48 rounded-md md:w-60 ml-4 text-xs md:text-sm"
          onClick={() => {
            if (orders.length) {
              dispatch(changeActiveProcess("checkout"));
            } else {
              toast.error("please select product to make order");
            }
          }}
        >
          PROCESSED TO CHECKOUT
        </motion.button>
      </div>
    </div>
  );
};
export default ShoppingCardComponent;
