import "@/styles/globals.css";
import "@/styles/navBar.css";
import NavBar from "@/components/navbar";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <NavBar />
      <Component {...pageProps} />
    </div>
  );
}
