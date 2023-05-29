import "@/styles/globals.css";
import NavBar from "@/components/navbar";
import Layout from "@/components/layout";
import "@fontsource/noto-serif-display"; // Defaults to weight 400
import "@fontsource/noto-serif-display/400.css"; // Specify weight
import "@fontsource/noto-serif-display/400-italic.css";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <NavBar />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
