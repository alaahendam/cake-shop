import React, { useState, useEffect } from "react";
import Image from "next/image";
import Counter from "../counter";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { changeActiveProcess } from "@/redux/features/activeProcess";
import SelectAllIcon from "@mui/icons-material/SelectAll";
const ShoppingCardComponent = () => {
  const dispatch = useDispatch();
  const [selectedProducts, setSelectedProducts] = useState([]);
  const cart = useSelector((state) => state.cart.cart);

  return (
    <div className="flex justify-center items-center flex-col py-5">
      <h1 className="text-2xl text-pink-700 font-semibold pb-3">
        shoppingCard
      </h1>
      <table className="text-gray-500">
        <thead>
          <tr className="border-b-2 border-[#ba9169] pb-3 h-14 text-sm md:text-lg">
            <th className="w-[5%] text-blue-400 cursor-pointer">
              <SelectAllIcon />
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
                selectedProducts.includes(index) ? "bg-slate-100" : null
              }`}
              key={index}
            >
              <td className="w-[5%]">
                <div className="flex flex-col justify-center items-center">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    onChange={() => {
                      if (selectedProducts.includes(index)) {
                        // Item already exists in the array, remove it
                        setSelectedProducts(
                          selectedProducts.filter((item) => item !== index)
                        );
                      } else {
                        // Item doesn't exist, add it to the array
                        setSelectedProducts([...selectedProducts, index]);
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
                  <Counter count={item?.quantity} />
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
                  <IconButton>
                    <CloseIcon />
                  </IconButton>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <p>Subtotal : {cart?.totalCartPrice} AMD</p>
        <p>Delivery : 1000 AMD</p>
        <p>Total : {cart?.totalCartPrice + 1000} AMD</p>
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
          onClick={() => dispatch(changeActiveProcess("checkout"))}
        >
          PROCESSED TO CHECKOUT
        </motion.button>
      </div>
    </div>
  );
};
export default ShoppingCardComponent;
