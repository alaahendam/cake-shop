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
import { useDispatch } from "react-redux";
import { addCartNum } from "@/redux/features/cart";
import PrivateRoute from "@/utilities/privateRoute";

const Cake = () => {
  const [data, setData] = useState({});
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = router.query;
  console.log("id", id);
  useEffect(() => {
    try {
      const fetchData = async () => {
        const { data } = await API.get(`products/by-id/${id}`);
        console.log(data);
        setData(data);
      };
      if (id) {
        fetchData();
      }
    } catch (error) {
      console.log(error);
    }
  }, [id]);
  const date = new Date();
  const addToCart = async () => {
    const { data } = await API.post("/orders/addToCart/", {
      productId: id,
      quantity: quantity,
    });
    console.log(data);
    if (data?.msg == "product added to cart successfully") {
      dispatch(addCartNum(data?.cartLength));
    }
  };
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 p-10">
        <div className="w-full relative" dir="rtl">
          <Image
            priority
            src={data?.product?.url ?? `/images/cheeseCake.jpg`}
            alt="Example Image"
            width={1000}
            height={1000}
            className="w-full md:w-3/5 h-96 rounded-md"
          />
          <Favourite />
        </div>
        <div>
          <h1 className="text-3xl">{data?.product?.nameEn}</h1>
          <h3 className="text-1xl">{data?.product?.price} AMD</h3>
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
          <div className="w-1/2">
            <Counter count={1} callbackF={setQuantity} />
          </div>
          <p>SKU:{data?.product?.quantity}</p>
          <p>Category : {data?.product?.sybCategory?.category?.nameEn}</p>
          <p>Flavour : {data?.product?.flavour?.nameEn}</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.99 }}
            className="bg-pink-500 text-slate-50 py-2 w-1/2 rounded-sm"
            onClick={addToCart}
          >
            ADD TO CARD
          </motion.button>
        </div>
      </div>
      <CakeInfoTabs data={data} />
      <CustomCarousel data={data?.relatedProducts ?? [{}]} />
      <Footer />
    </div>
  );
};

export default PrivateRoute(Cake, "CLIENT", "/");
