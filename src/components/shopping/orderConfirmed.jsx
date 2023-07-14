import React from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { changeActiveProcess } from "@/redux/features/activeProcess";
import Image from "next/image";
const OrderConfirmed = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const loginUser = useSelector((state) => state.user.user);
  const cart = useSelector((state) => state.cart.cart);
  const orders = useSelector((state) => state.cart.orders);
  const ordersPrice = useSelector((state) => state.cart.ordersPrice);
  const date = new Date();
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-2xl text-[#ba9169] font-semibold">Order Confirmed</h1>
      <div className="bg-[#ffdfbf] w-[95%] md:w-2/3 m-auto rounded-md px-3 py-6">
        <h1 className="text-xl text-pink-600 font-semibold">
          Your Order Confirmed !
        </h1>
        <p>Hi {loginUser?.fullName}</p>
        <p>your order has been confirmed and will be shipping soon</p>
        <div className="h-20 border border-y border-x-0 border-pink-700 flex justify-around items-center text-center mt-3">
          <div>
            <p className="text-pink-600">ORDER DATE</p>
            <p>{date.toISOString().split("T")[0]}</p>
          </div>
          <div>
            <p className="text-pink-600">PAYMENT</p>
            <p>{loginUser?.fullName}</p>
          </div>
          <div>
            <p className="text-pink-600">ADDRESS</p>
            <p>{loginUser?.profile?.address}</p>
          </div>
        </div>
        <div>
          {cart?.cartItems?.map((item) => {
            if (orders.includes(item?.id)) {
              return (
                <div
                  className="border-b border-pink-600 py-5 flex justify-around items-center"
                  key={item?.id}
                >
                  <div className="flex items-center w-1/2 md:w-1/2">
                    <Image
                      priority
                      src={item?.product?.url}
                      alt="Example Image"
                      width={300}
                      height={400}
                      className="w-3/5 h-20 md:w-2/5 md:h-28 rounded-md mr-1"
                    />
                    <p>{item?.product?.nameEn}</p>
                  </div>
                  <p>x{item?.quantity}</p>
                  <p>{item?.price}</p>
                </div>
              );
            }
          })}
        </div>
        <div className="flex justify-center py-2 md:justify-end">
          <div>
            <p>Subtotal : {ordersPrice} AMD</p>
            <p>Delivery : 1000 AMD</p>
            <p>Total : {ordersPrice + 1000} AMD</p>
          </div>
        </div>

        <div className="py-2 border-b border-pink-600">
          <p>THANK YOU !</p>
          <p>THANK YOU ! THANK YOU !THANK YOU !</p>
        </div>
        <div className="flex text-sm">
          <p className="mr-2">Question ?</p>
          <p>Contact Our Customer Support</p>
        </div>
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
          onClick={() => router.push("/")}
        >
          Go TO HOME
        </motion.button>
      </div>
    </div>
  );
};
export default OrderConfirmed;
