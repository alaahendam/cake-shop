import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { changeActiveProcess } from "@/redux/features/activeProcess";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import Image from "next/image";
import CheckoutTextInput from "./checkoutTextInput";
import { useForm, Controller } from "react-hook-form";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { addOrdersPrice, addOrders, addCartNum } from "@/redux/features/cart";
import toast from "react-hot-toast";
import API from "../../utilities/api";
import { addLoginUser } from "@/redux/features/user";
const theme = createTheme({
  palette: {
    primary: {
      main: "#ba9169",
      contrastText: "#ba9169",
    },
  },
});
const Checkout = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const orders = useSelector((state) => state.cart.orders);
  const ordersPrice = useSelector((state) => state.cart.ordersPrice);
  const loginUser = useSelector((state) => state.user.user);
  const { handleSubmit, control, reset, register } = useForm({
    defaultValues: { ...loginUser, ...loginUser?.profile },
  });
  console.log({ ...loginUser, ...loginUser?.profile });
  const onSubmit = async (values) => {
    const loadingToast = toast.loading("Please Wait...");
    try {
      const { data: profileData } = await API.post("/users/profile/", {
        ...values,
        city: "",
        bio: "",
      });
      dispatch(addLoginUser({ ...loginUser, profile: profileData.profile }));
      const { data: ConfirmedOrder } = await API.post("/orders", {
        deliveryAddress: values.address,
        cartItemsIdes: orders,
      });
      console.log(ConfirmedOrder);
      dispatch(addCartNum(ConfirmedOrder?.cartLength));
      console.log(profileData);
      toast.dismiss(loadingToast);
      toast.success(ConfirmedOrder?.msg);
      dispatch(changeActiveProcess("orderConfirmed"));
    } catch (error) {
      console.log(error);
      toast.error("This is an error!");
    }
  };
  useEffect(() => {
    let totalPrice = 0;
    cart?.cartItems?.map((item, index) => {
      if (orders.includes(item?.id)) {
        totalPrice += item?.price;
      }
    });
    dispatch(addOrdersPrice(totalPrice));
  }, [orders]);
  return (
    <form
      className="flex justify-center items-center flex-col py-5 h-full"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="text-2xl text-pink-700 font-semibold pb-3">Checkout</h1>
      <div
        className="flex justify-center w-full flex-wrap px-5 md:px-28 h-full md:h-[67vh]"
        dir="rtl"
      >
        <div
          className="bg-[#ffdfbf] basis-full md:basis-1/3 rounded-md px-2 py-4 h-96 md:h-full "
          dir="ltr"
        >
          <h1 className="text-1xl text-[#ba9169] font-semibold">Your Order</h1>
          <div className="h-[80%] overflow-auto">
            {cart?.cartItems?.map((item, index) => {
              if (orders.includes(item?.id)) {
                //dispatch(addOrdersPrice(item?.price));
                return (
                  <div className="flex items-center my-2" key={index}>
                    <Image
                      priority
                      src={item?.product?.url}
                      alt="Example Image"
                      width={300}
                      height={400}
                      className="w-1/4 h-20 rounded-md "
                    />
                    <div className="w-2/3 px-2">
                      <h2>{item?.product?.nameEn}</h2>
                      <p>{item?.product?.flavour?.nameEn}</p>
                      <div className="flex justify-between">
                        <p>x {item.quantity}</p>
                        <p>{item?.price}</p>
                      </div>
                    </div>
                    <IconButton
                      onClick={() =>
                        dispatch(
                          addOrders(orders.filter((id) => id !== item?.id))
                        )
                      }
                    >
                      <CloseIcon />
                    </IconButton>
                  </div>
                );
              }
            })}
          </div>
          <div className="bg-[#ba9169] w-full h-px"></div>
          <div className="flex justify-between text-[#ba9169]">
            <p>Subtotal : </p>
            <p>{ordersPrice} AMD</p>
          </div>
          <div className="flex justify-between text-[#ba9169]">
            <p>Subtotal : </p>
            <p>{ordersPrice + 200} AMD</p>
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
                name="lName"
              />
              <CheckoutTextInput
                required={true}
                label="Phone Number"
                variant="standard"
                control={control}
                name="phoneNum"
              />
              <CheckoutTextInput
                required={true}
                label="Email"
                variant="standard"
                control={control}
                name="email"
              />
            </div>
            <CheckoutTextInput
              required={true}
              label="State/Country"
              variant="standard"
              control={control}
              name="country"
            />
            {/* <CheckoutTextInput
              required={true}
              type={"dateTime"}
              label="Delivery time"
              variant="standard"
              control={control}
              name="deliveryTime"
            /> */}

            <CheckoutTextInput
              required={true}
              label="Delivery address"
              variant="standard"
              control={control}
              name="address"
            />
            <h3 className="text-[#ba9169] text-lg">Additional Information</h3>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="border border-[black] mt-2 w-full md:w-1/2 rounded-md focus:outline-[#ba9169]"
              {...register("information")}
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
        <motion.input
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.99 }}
          className="bg-pink-700 text-white h-10 w-48 rounded-md md:w-60 ml-4 text-xs md:text-sm"
          //onClick={() => dispatch(changeActiveProcess("orderConfirmed"))}
          value={"Confirme Order"}
          type="submit"
        />
      </div>
    </form>
  );
};
export default Checkout;
