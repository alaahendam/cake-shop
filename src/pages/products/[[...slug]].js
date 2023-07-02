import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import CakeCard from "@/components/cakeCard";
import ProductsFilters from "@/components/productFilters";
import Footer from "@/components/footer";
import API from "../../utilities/api";
import { useSelector } from "react-redux";
import Pagination from "@/components/pagination";
const Products = () => {
  const router = useRouter();
  const data = useSelector((state) => state.products.products);

  const queryParams = {
    nameEn: "",
    nameAr: "",
    page: "",
    size: "",
    priceStart: "",
    priceEnd: "",
    category: "",
  };
  return (
    <div>
      <ProductsFilters />
      <div className="container mx-auto p-6 md:px-24 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-10 ">
          {data?.map((item, index) => (
            <CakeCard key={index} info={item} />
          ))}
        </div>
        <div className="w-full flex justify-center mt-5 pt-5">
          <Pagination />
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Products;
