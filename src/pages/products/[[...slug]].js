import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import CakeCard from "@/components/cakeCard";
import ProductsFilters from "@/components/productFilters";
import Footer from "@/components/footer";
import API from "../../utilities/api";
import { useSelector } from "react-redux";
import Pagination from "@/components/pagination";
import Dialog from "@mui/material/Dialog";
import { useForm, useFieldArray } from "react-hook-form";
import CategoryIcon from "@mui/icons-material/Category";
import SubdirectoryArrowRightIcon from "@mui/icons-material/SubdirectoryArrowRight";
import { IconButton } from "@material-ui/core";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import Image from "next/image";
const Products = () => {
  const [openAddProduct, setOpenAddProduct] = useState(false);
  const [productImg, setProductImg] = useState("");
  const [img, setImg] = useState(null);
  const router = useRouter();
  const data = useSelector((state) => state.products.products);
  const categories = useSelector((state) => state.products.categories);
  const loginUser = useSelector((state) => state.user.user);
  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
    reset,
    resetField,
  } = useForm();
  const onSubmit = async (values) => {
    try {
      console.log(values);
      const { data } = await API.post("/products", {
        ...values,
        nameAr: "كيكة جزر",
        flavourId: 1,
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="w-full flex items-center justify-center mt-4">
        {loginUser?.role == "COMPANY" ? (
          <button
            className="text-white bg-pink-600 rounded-md w-fit h-fit py-2 px-4 mr-2"
            onClick={() => setOpenAddProduct(true)}
          >
            Add Product
          </button>
        ) : null}
        <ProductsFilters />
      </div>
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
      <Dialog
        disableScrollLock
        open={openAddProduct}
        onClose={() => setOpenAddProduct(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth={true}
      >
        <form
          className="w-full h-full py-10 px-6 text-pink-900"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="w-full flex justify-center mb-2">
            <div className="h-20 w-20 md:w-28 md:h-28 rounded-full bg-gray-300 relative flex justify-center items-center border border-pink-500">
              <Image
                priority
                src={productImg}
                width={400}
                height={500}
                className="w-full h-full rounded-full"
              />
              <label
                htmlFor="productImg"
                className="absolute cursor-pointer text-pink-300"
              >
                <CameraAltIcon />
              </label>
            </div>

            {/* <input
              id="productImg"
              type="file"
              accept="image/*"
              multiple={false}
              onChange={(e) => {
                console.log("handler");
                // console.log(e.target.files[0]);
                // const file = e.target.files[0]; // Access the first selected file
                // const fileUrl = URL.createObjectURL(file);
                // setProductImg(fileUrl);
              }}
              {...register(`image`)}
              hidden
            /> */}
            <input
              id="productImg"
              type="file"
              accept="image/*"
              hidden
              {...register(`image`)}
              onChange={(e) => {
                console.log(e.target.files[0]);
                const file = e.target.files[0];
                setImg(file); // Access the first selected file
                const fileUrl = URL.createObjectURL(file);
                setProductImg(fileUrl);
              }}
            />
          </div>
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
                price :{" "}
              </label>
              <input
                type="number"
                className="w-2/3 md:w-[60%] px-2 focus:outline-pink-700 rounded-md h-10 border border-pink-500"
                control={control}
                {...register(`price`)}
              />
            </div>
            <div className="flex items-center">
              <label htmlFor="" className="">
                quantity:{" "}
              </label>
              <input
                type="number"
                className="w-2/3 md:w-[60%] px-2 focus:outline-pink-700 rounded-md h-10 border border-pink-500"
                control={control}
                {...register(`quantity`)}
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className="">
              Description :{" "}
            </label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="5"
              className="border border-pink-500 mt-2 w-full md:w-1/2 rounded-md focus:outline-pink-700"
              {...register("descriptionEn")}
            ></textarea>
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
                      type="radio"
                      name="subCategory"
                      value={subCategory.id}
                      id=""
                      className="mx-1"
                      control={control}
                      {...register(`subCategoryId`)}
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
              value="Add Product"
              className=" w-40 h-11 border border-pink-500 rounded-md text-pink-500 cursor-pointer"
            />
          </div>
        </form>
      </Dialog>
    </div>
  );
};
export default Products;
