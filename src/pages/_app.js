import React, { useEffect } from "react";
import "@/styles/globals.css";
import Layout from "@/components/layout";
import "@fontsource/noto-serif-display"; // Defaults to weight 400
import "@fontsource/noto-serif-display/400.css"; // Specify weight
import "@fontsource/noto-serif-display/400-italic.css";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { Toaster } from "react-hot-toast";
import NavBar from "@/components/navbar";
import "@fontsource/pacifico"; // Defaults to weight 400
// import "@fontsource/pacifico/400.css"; // Specify weight
// import "@fontsource/pacifico/400-italic.css";
export default function App({ Component, pageProps }) {
  return (
    <div>
      <Provider store={store}>
        <Toaster />
        <NavBar />
        <Layout>
          <Component {...pageProps} />
        </Layout>
        {/* <ToastContainer /> */}
      </Provider>
    </div>
  );
}
