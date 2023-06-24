import React, { useState } from "react";
import Image from "next/image";
import Counter from "../counter";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import { motion } from "framer-motion";
const ShoppingCardComponent = () => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const data = [
    { img: "cheeseCake.jpg", price: "10 AMD", quantity: 2, total: "20 AMD" },
    { img: "cheeseCake.jpg", price: "10 AMD", quantity: 2, total: "20 AMD" },
    { img: "cheeseCake.jpg", price: "10 AMD", quantity: 2, total: "20 AMD" },
    { img: "cheeseCake.jpg", price: "10 AMD", quantity: 2, total: "20 AMD" },
  ];
  return (
    <div className="flex justify-center items-center flex-col py-5">
      <h1 className="text-2xl text-pink-700 font-semibold pb-3">
        shoppingCard
      </h1>
      <table class="text-gray-500">
        <thead>
          <tr className="border-b-2 border-[#ba9169] pb-3 h-14">
            <th></th>
            <th>Product</th>
            <th>Price</th>
            <th>quantity</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              className={`border-b-2 border-[#ba9169] ${
                selectedProducts.includes(index) ? "bg-slate-100" : null
              }`}
            >
              <td
                style={{
                  width: "10%",
                }}
              >
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
                class="p-3"
                style={{
                  width: "20%",
                }}
              >
                <Image
                  priority
                  src={`/images/${item?.img ? item.img : "cheeseCake.jpg"}`}
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
                  {item.price}
                </div>
              </td>
              <td
                style={{
                  width: "20%",
                }}
              >
                <div className="flex flex-col justify-center items-center">
                  <Counter />
                </div>
              </td>
              <td
                style={{
                  width: "20%",
                }}
              >
                <div className="flex flex-col justify-center items-center">
                  {item.total}
                </div>
              </td>
              <td
                style={{
                  width: "10%",
                }}
              >
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
      <div className="flex justify-center items-center py-5">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.99 }}
          className="border border-pink-700 text-pink-700 h-10 w-48 rounded-md md:w-60 text-xs md:text-sm"
        >
          CONTINUE SHOPPING
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.99 }}
          className="bg-pink-700 text-white h-10 w-48 rounded-md md:w-60 ml-4 text-xs md:text-sm"
        >
          PROCESSED TO CHECKOUT
        </motion.button>
      </div>
    </div>
  );
};
export default ShoppingCardComponent;
