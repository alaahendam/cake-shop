import { useRouter } from "next/router";
import Link from "next/link";
import CakeCard from "@/components/cakeCard";
import Footer from "@/components/footer";
const Products = () => {
  const router = useRouter();
  console.log(router);
  console.log(router.query.slug);
  console.log(router.query);
  //   return <div>{router.query.slug}</div>;
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
          <CakeCard />
          <CakeCard />
          <CakeCard />
          <CakeCard />
          <CakeCard />
          <CakeCard />
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Products;
