import { useState, useEffect } from "react";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";
import Dialog from "@mui/material/Dialog";
import { useRouter } from "next/router";
import { addProducts } from "@/redux/features/products";
import { useDispatch } from "react-redux";
import CategoryIcon from "@mui/icons-material/Category";
import SubdirectoryArrowRightIcon from "@mui/icons-material/SubdirectoryArrowRight";
import API from "../utilities/api";
const ProductsFilters = () => {
  const dispatch = useDispatch();
  const [openFilter, setOpenFilter] = useState(false);
  const [categories, setCategories] = useState([]);
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
        console.log(router.asPath);
        const { data } = await API.get(
          router.asPath == "/products" || router.asPath == "/products/filter"
            ? "/products/filter?page=1&size=1"
            : router.asPath
        );
        dispatch(addProducts(data.filtered_products));
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [router]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await API.get("/categories");
      console.log("categories data", data);
      setCategories(data?.categories);
    };
    fetchData();
  }, []);
  console.log(router.query);
  const deleteFilter = (key) => {
    let queryObject = router.query;
    delete queryObject[key];
    delete queryObject["slug"];
    router.push({
      pathname: "/products/filter",
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
            router.push({ pathname: "/products/filter", query: queryParams })
          }
        >
          Test
        </button>
        <div className="w-full bg-slate-600 flex flex-wrap px-2 py-1">
          {Object.keys(router.query).map((key) => {
            if (!["slug", "page", "size"].includes(key)) {
              console.log(key);
              return (
                <div
                  className=" w-fit py-2 px-3 mb-1 ml-1 border border-pink-500 text-pink-500 rounded-md select-none flex items-center"
                  key={key}
                >
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
            }
          })}
        </div>
      </div>
      <Dialog
        disableScrollLock
        open={openFilter}
        onClose={() => setOpenFilter(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth={true}
      >
        <div className="w-full h-full bg-[#a71b52] py-10 px-6">
          <div className="mb-5">
            <label htmlFor="" className="text-white">
              Name :{" "}
            </label>
            <input
              type="text"
              className="w-2/3 px-2 focus:outline-none rounded-md h-10"
            />
          </div>
          <div className="flex justify-between items-center text-sm md:text-lg ">
            <label htmlFor="" className="text-white">
              price start :{" "}
            </label>
            <input
              type="number"
              className="w-3/12 md:w-1/3 px-2 focus:outline-none rounded-md h-10"
            />
            <label htmlFor="" className="text-white">
              price end :{" "}
            </label>
            <input
              type="number"
              className="w-3/12 md:w-1/3 px-2 focus:outline-none rounded-md h-10"
            />
          </div>
          <div className="mb-5 text-white">
            {categories.map((mainCategory, index) => (
              <div key={index}>
                <div className="flex mt-2">
                  <CategoryIcon />
                  <p>{mainCategory.nameEn}</p>
                </div>
                {mainCategory?.subCategories?.map((subCategory, index) => (
                  <div className="flex mt-2 ml-3 items-center" key={index}>
                    <SubdirectoryArrowRightIcon />
                    <p>{subCategory.nameEn}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </Dialog>
    </div>
  );
};
export default ProductsFilters;
