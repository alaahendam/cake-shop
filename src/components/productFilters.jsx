import { useState, useEffect } from "react";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";
import Dialog from "@mui/material/Dialog";
import { useRouter } from "next/router";
import { addProducts } from "@/redux/features/products";
import { useDispatch } from "react-redux";
import API from "../utilities/api";
const ProductsFilters = () => {
  const dispatch = useDispatch();
  const [openFilter, setOpenFilter] = useState(false);
  const router = useRouter();

  const queryParams = {
    nameEn: "",
    nameAr: "",
    page: "",
    size: "",
    priceStart: "",
    priceEnd: "",
    category: "",
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Check if in the server-side rendering phase
        if (router.asPath === "/products/[[...slug]]") {
          console.log("Fallback route, handle differently");
          return;
        }
        const { data } = await API.get(
          router.asPath != "/products"
            ? router.asPath
            : "/products?page=1&size=1"
        );
        dispatch(addProducts(data.products));
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [router]);
  console.log(router);
  const deleteFilter = (key) => {
    let queryObject = router.query;
    delete queryObject[key];
    router.push({
      pathname: "/products",
      query: queryObject,
    });
  };
  return (
    <div className="flex justify-center items-center">
      <div
        dir="rtl"
        className="border border-slate-80 bg-blue-100 rounded-md mt-4 min-w-[50%] max-w-[75%] min-h-[56px] flex flex-col items-center justify-start md:justify-end px-2 md:flex-row"
      >
        <motion.div
          className="flex cursor-pointer border border-pink-500 text-pink-500 bg-white w-fit px-5 py-1 rounded-md select-none"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.99 }}
          onClick={() => setOpenFilter(true)}
        >
          <FilterAltIcon />
          Filter
        </motion.div>
        <button
          className="bg-pink-500"
          onClick={() =>
            router.push({ pathname: "/products", query: queryParams })
          }
        >
          Test
        </button>
        <div className="w-full bg-slate-600 flex flex-wrap px-2 py-1">
          {Object.keys(router.query).map((key) => {
            return (
              <div className=" w-fit py-2 px-3 mb-1 ml-1 border border-pink-500 text-pink-500 rounded-md select-none flex items-center">
                <motion.div
                  className="cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={() => deleteFilter(key)}
                >
                  <CloseIcon />
                </motion.div>
                {router.query[key]}
              </div>
            );
          })}
        </div>
      </div>
      <Dialog
        disableScrollLock
        open={openFilter}
        onClose={() => setOpenFilter(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div className="w-96 h-96 bg-pink-800"></div>
      </Dialog>
    </div>
  );
};
export default ProductsFilters;
