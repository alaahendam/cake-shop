import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import Image from "next/image";
import Rating from "@mui/material/Rating";
import Counter from "@/components/counter";
import Favourite from "@/components/favourite";
import CakeInfoTabs from "@/components/cakeInfoTabs";
import CustomCarousel from "@/components/carousel ";
import API from "../../utilities/api";
const Cake = () => {
  const [data, setData] = useState([]);

  const router = useRouter();
  const { id } = router.query;
  console.log("id", id);
  useEffect(() => {
    try {
      const fetchData = async () => {
        const { data } = await API.get(`products/by-id/${id}`);
        console.log(data.product);
        setData(data.product);
      };
      if (id) {
        fetchData();
      }
    } catch (error) {
      console.log(error);
    }
  }, [id]);
  const date = new Date();
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 p-10">
        <div className="w-full relative" dir="rtl">
          <Image
            priority
            src={data?.url ?? `/images/cheeseCake.jpg`}
            alt="Example Image"
            width={1000}
            height={1000}
            className="w-full md:w-3/5 h-96 rounded-md"
          />
          <Favourite />
        </div>
        <div>
          <h1 className="text-3xl">{data?.nameEn}</h1>
          <h3 className="text-1xl">{data?.price} AMD</h3>
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
          <Counter count={1} />
          <p>SKU:{data?.quantity}</p>
          <p>Category : {data?.sybCategory?.category?.nameEn}</p>
          <p>Flavour : {data?.flavour?.nameEn}</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.99 }}
            className="bg-pink-500 text-slate-50 py-2 w-1/2 rounded-sm"
          >
            ADD TO CARD
          </motion.button>
        </div>
      </div>
      <CakeInfoTabs data={data} />
      <CustomCarousel />
      <Footer />
    </div>
  );
};
export default Cake;
