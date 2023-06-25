import React from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { changeActiveProcess } from "@/redux/features/activeProcess";
const OrderConfirmed = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex justify-center items-center">
      <h1 className="text-2xl text-[#ba9169] font-semibold">OrderConfirmed</h1>
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
          onClick={() => dispatch(changeActiveProcess("shoppingCard"))}
        >
          PROCESSED TO CHECKOUT
        </motion.button>
      </div>
    </div>
  );
};
export default OrderConfirmed;
