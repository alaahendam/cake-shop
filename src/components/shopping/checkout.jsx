import React from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { changeActiveProcess } from "@/redux/features/activeProcess";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import Image from "next/image";
import CheckoutTextInput from "./checkoutTextInput";
import { useForm, Controller } from "react-hook-form";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ba9169",
      contrastText: "#ba9169",
    },
  },
});
const Checkout = () => {
  const { handleSubmit, control, reset } = useForm();
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
        <ThemeProvider theme={theme}>
          <div
            className=" basis-full md:basis-2/3 py-2 px-0 md:px-10"
            dir="ltr"
          >
            <div className="grid grid-cols-2 gap-5">
              <CheckoutTextInput
                required={true}
                label="First Name"
                variant="standard"
                control={control}
                name="fName"
              />
              <CheckoutTextInput
                required={true}
                label="Last Name"
                variant="standard"
                control={control}
                name="fName"
              />
              <CheckoutTextInput
                required={true}
                label="Phone Number"
                variant="standard"
                control={control}
                name="fName"
              />
              <CheckoutTextInput
                required={true}
                label="Email"
                variant="standard"
                control={control}
                name="fName"
              />
            </div>
            <CheckoutTextInput
              required={true}
              label="State/Country"
              variant="standard"
              control={control}
              name="fName"
            />
            <CheckoutTextInput
              required={true}
              label="Delivery time"
              variant="standard"
              control={control}
              name="fName"
            />
            <CheckoutTextInput
              required={true}
              label="Delivery address"
              variant="standard"
              control={control}
              name="fName"
            />
            <h3 className="text-[#ba9169] text-lg">Additional Information</h3>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="border border-[black] mt-2 w-full md:w-1/2 rounded-md focus:outline-[#ba9169]"
            ></textarea>
          </div>
        </ThemeProvider>
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
          Confirme Order
        </motion.button>
      </div>
    </div>
  );
};
export default Checkout;
