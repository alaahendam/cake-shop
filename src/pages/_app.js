import "@/styles/globals.css";
import NavBar from "@/components/navbar";
import Layout from "@/components/layout";
import "@fontsource/noto-serif-display"; // Defaults to weight 400
import "@fontsource/noto-serif-display/400.css"; // Specify weight
import "@fontsource/noto-serif-display/400-italic.css";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import { Toaster } from "react-hot-toast";
export default function App({ Component, pageProps }) {
  return (
    <div>
      <Toaster />
      <NavBar />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      {/* <ToastContainer /> */}
    </div>
  );
}
