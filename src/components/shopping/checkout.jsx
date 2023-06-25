import React from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { changeActiveProcess } from "@/redux/features/activeProcess";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import Image from "next/image";
const Checkout = () => {
  const dispatch = useDispatch();
  const data = [
    {
      name: "chesse cake",
      flavour: "chesse",
      img: "cheeseCake.jpg",
      price: "10 AMD",
      quantity: 2,
      total: "20 AMD",
    },
    {
      name: "chesse cake",
      flavour: "chesse",
      img: "cheeseCake.jpg",
      price: "10 AMD",
      quantity: 2,
      total: "20 AMD",
    },
    {
      name: "chesse cake",
      flavour: "chesse",
      img: "cheeseCake.jpg",
      price: "10 AMD",
      quantity: 2,
      total: "20 AMD",
    },
    {
      name: "chesse cake",
      flavour: "chesse",
      img: "cheeseCake.jpg",
      price: "10 AMD",
      quantity: 2,
      total: "20 AMD",
    },
  ];
  return (
    <div className="flex justify-center items-center flex-col py-5">
      <h1 className="text-2xl text-pink-700 font-semibold pb-3">Checkout</h1>
      <div
        className="flex justify-center w-full flex-wrap px-5 md:px-28"
        dir="rtl"
      >
        <div
          className="bg-[#ffdfbf] basis-full md:basis-1/3 rounded-md px-2 py-4"
          dir="ltr"
        >
          <h1 className="text-1xl text-[#ba9169] font-semibold">Your Order</h1>
          <div>
            {data.map((item, index) => (
              <div className="flex items-center my-2" key={index}>
                <Image
                  priority
                  src={`/images/${item?.img ? item.img : "cheeseCake.jpg"}`}
                  alt="Example Image"
                  width={300}
                  height={400}
                  className="w-1/4 h-20 rounded-md "
                />
                <div className="w-2/3 px-2">
                  <h2>{item.name}</h2>
                  <p>{item.flavour}</p>
                  <div className="flex justify-between">
                    <p>{item.quantity}</p>
                    <p>{item.price}</p>
                  </div>
                </div>
                <IconButton>
                  <CloseIcon />
                </IconButton>
              </div>
            ))}
          </div>
          <div className="bg-[#ba9169] w-full h-px"></div>
          <div className="flex justify-between text-[#ba9169]">
            <p>Subtotal : </p>
            <p>1000 AMD</p>
          </div>
          <div className="flex justify-between text-[#ba9169]">
            <p>Subtotal : </p>
            <p>1000 AMD</p>
          </div>
        </div>
        <div className="bg-gray-700 basis-full md:basis-2/3 h-52"></div>
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
          onClick={() => dispatch(changeActiveProcess("orderConfirmed"))}
        >
          PROCESSED TO CHECKOUT
        </motion.button>
      </div>
    </div>
  );
};
export default Checkout;
