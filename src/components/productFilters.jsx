import { useState, useEffect } from "react";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";
import Dialog from "@mui/material/Dialog";
import { useRouter } from "next/router";
import { addProducts } from "@/redux/features/products";
import { useDispatch, useSelector } from "react-redux";
import CategoryIcon from "@mui/icons-material/Category";
import SubdirectoryArrowRightIcon from "@mui/icons-material/SubdirectoryArrowRight";
import { IconButton } from "@material-ui/core";
import { useForm, useFieldArray } from "react-hook-form";
import API from "../utilities/api";
const ProductsFilters = () => {
  const dispatch = useDispatch();
  const productsNum = useSelector((state) => state.products.productsNum);
  const router = useRouter();
  const [openFilter, setOpenFilter] = useState(false);
  const [categories, setCategories] = useState([]);
  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
    reset,
    resetField,
  } = useForm();
  useEffect(() => {
    reset({
      ...router.query,
      subCategories: router?.query?.subCategories?.split(","),
    });
  }, [reset, router.query]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Check if in the server-side rendering phase
        if (router.asPath === "/products/[[...slug]]") {
          console.log("Fallback route, handle differently");
          return;
        }
        const { data } = await API.get(
          router.asPath == "/products" || router.asPath == "/products/filter"
            ? "/products/filter?page=1&size=10"
            : router.asPath
        );
        dispatch(addProducts(data));
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
  const deleteFilter = (key) => {
    let queryObject = router.query;
    delete queryObject[key];
    delete queryObject["slug"];
    router.push({
      pathname: "/products/filter",
      query: queryObject,
    });
  };
  const onSubmit = (data) => {
    for (let prop in data) {
      if (!data[prop]) {
        delete data[prop];
      }
    }
    if (data?.subCategories) {
      data.subCategories = data?.subCategories?.toString();
    }
    delete data.slug;
    router.push({
      pathname: "/products/filter",
      query: data,
    });
    setOpenFilter(false);
  };
  return (
    <div className="flex justify-center items-center">
      <div
        dir="rtl"
        className="border border-slate-80 bg-blue-100 rounded-md mt-4 min-w-[50%] max-w-[80%] min-h-[56px] flex flex-col items-center justify-start md:justify-end px-2 md:flex-row py-2 md:py-0"
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

        <div className="w-full flex flex-wrap px-2 py-1">
          {Object.keys(router.query).map((key) => {
            if (!["slug", "page", "size", "subCategories"].includes(key)) {
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
        <div className="h-full min-w-fit max-w-[350px] text-slate-400">
          .There are {productsNum} products
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
        <form
          className="w-full h-full py-10 px-6 text-pink-900"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-5">
            <label htmlFor="" className="">
              Name :{" "}
            </label>
            <input
              type="text"
              className="w-2/3 px-2 focus:outline-pink-700 rounded-md h-10 border border-pink-500"
              control={control}
              {...register(`nameEn`)}
            />
          </div>
          <div className="flex justify-between items-center text-sm md:text-lg flex-col md:flex-row">
            <div className="flex items-center mb-2 md:mb-0">
              <label htmlFor="" className="">
                price start :{" "}
              </label>
              <input
                type="number"
                className="w-2/3 md:w-1/3 px-2 focus:outline-pink-700 rounded-md h-10 border border-pink-500"
                control={control}
                {...register(`priceStart`)}
              />
            </div>
            <div className="flex items-center">
              <label htmlFor="" className="">
                price end :{" "}
              </label>
              <input
                type="number"
                className="w-2/3 md:w-1/3 px-2 focus:outline-pink-700 rounded-md h-10 border border-pink-500"
                control={control}
                {...register(`priceEnd`)}
              />
            </div>
          </div>
          <div className="mb-5">
            {categories.map((mainCategory, index) => (
              <div key={index}>
                <div className="flex mt-2">
                  <CategoryIcon />
                  <p className="ml-1">{mainCategory.nameEn}</p>
                </div>
                {mainCategory?.subCategories?.map((subCategory, index) => (
                  <div className="flex mt-2 ml-3 items-center" key={index}>
                    <SubdirectoryArrowRightIcon />
                    <input
                      type="checkbox"
                      name="subCategory"
                      value={subCategory.id}
                      id=""
                      className="mx-1"
                      control={control}
                      {...register(`subCategories`)}
                    />
                    <p>{subCategory.nameEn}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center">
            <input
              type="submit"
              value="Apply Filter"
              className=" w-40 h-11 border border-pink-500 rounded-md text-pink-500 cursor-pointer"
            />
          </div>
        </form>
      </Dialog>
    </div>
  );
};
export default ProductsFilters;
