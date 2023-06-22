import { useRouter } from "next/router";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import Image from "next/image";
import Rating from "@mui/material/Rating";
import Counter from "@/components/counter";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CakeInfoTabs from "@/components/cakeInfoTabs";
const Cake = () => {
  const router = useRouter();
  const date = new Date();
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 p-10">
        <div className="w-full relative" dir="rtl">
          <Image
            priority
            src={`/images/cheeseCake.jpg`}
            alt="Example Image"
            width={1000}
            height={1000}
            className="w-full md:w-3/5 h-96 rounded-md"
          />
          <div className="bg-slate-50 rounded-full w-10 h-10 flex justify-center items-center absolute top-1 right-1 cursor-pointer">
            <FavoriteBorderIcon sx={{ color: "gray" }} />
          </div>
        </div>
        <div>
          <h1 className="text-3xl">Coffee Tiramisu</h1>
          <h3 className="text-1xl">1000 AMD</h3>
          <h5 className="text-sm">{date.toISOString().split("T")[0]}</h5>
          <div className="w-full h-px bg-pink-400"></div>
          <Rating
            name="half-rating"
            defaultValue={2.5}
            precision={0.5}
            onChange={(event, newValue) => {
              console.log(newValue);
            }}
          />
          <Counter />
          <p>SKU:11</p>
          <p>Category:alaa</p>
          <p>Flavour:cheese</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.99 }}
            className="bg-pink-500 text-slate-50 py-2 w-1/2 rounded-sm"
          >
            ADD TO CARD
          </motion.button>
        </div>
      </div>
      <CakeInfoTabs />
      <Footer />
    </div>
  );
};
export default Cake;
