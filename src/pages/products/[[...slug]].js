import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import CakeCard from "@/components/cakeCard";
import Footer from "@/components/footer";
import API from "../../utilities/api";
const Products = () => {
  const router = useRouter();
  const [data, setData] = useState([]);
  useEffect(() => {
    try {
      const fetchData = async () => {
        const { data } = await API.get("/products");
        console.log(data.products);
        setData(data?.products ?? []);
      };
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const queryParams = {
    category: "value1",
    subCategory: "value2",
    price: "121212",
    ingredients: JSON.stringify({ param1: "hahaha" }),
  };
  return (
    <div>
      <div className="container mx-auto p-6 md:px-24 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-10 ">
          {data?.map((item, index) => (
            <CakeCard key={index} info={item} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Products;
