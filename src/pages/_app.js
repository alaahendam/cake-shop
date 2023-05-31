import React, { useEffect } from "react";
import "@/styles/globals.css";
import Layout from "@/components/layout";
import "@fontsource/noto-serif-display"; // Defaults to weight 400
import "@fontsource/noto-serif-display/400.css"; // Specify weight
import "@fontsource/noto-serif-display/400-italic.css";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    console.log("this app.js");
  }, []);
  return (
    <div>
      <Provider store={store}>
        <Toaster />
        {/* <MemoizedResponsiveAppBar /> */}
        <Layout>
          <Component {...pageProps} />
        </Layout>
        {/* <ToastContainer /> */}
      </Provider>
    </div>
  );
}
