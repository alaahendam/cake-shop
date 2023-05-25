import "@/styles/globals.css";
import NavBar from "@/components/navbar";
import Layout from "@/components/layout";
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
