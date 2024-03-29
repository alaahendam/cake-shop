import { useEffect } from "react";
import API from "@/utilities/api";
import { addLoginUser } from "@/redux/features/user";
import { addCartNum } from "@/redux/features/cart";
import { useDispatch } from "react-redux";
import Head from "next/head";
import { useRouter } from "next/router";
const Layout = ({ children }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [userData, cartNumData] = await Promise.all([
          API.get("/users/"),
          API.get("/orders/cart-items-num/"),
        ]);

        const { data: userDataResponse } = userData;
        const { data: cartNumDataResponse } = cartNumData;
        console.log(cartNumDataResponse);
        if (userDataResponse.user) {
          dispatch(addLoginUser(userDataResponse.user));
        }
        if (cartNumDataResponse) {
          dispatch(addCartNum(cartNumDataResponse.cartLength));
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [router]);
  return (
    <div>
      <Head>
        <title>Glorious</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        style={{
          paddingTop: "80px",
        }}
      >
        {children}
      </div>
    </div>
  );
};
export default Layout;
