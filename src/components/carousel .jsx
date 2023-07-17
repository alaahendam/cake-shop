const imageUrls = [
  "cheeseCake.jpg",
  "cheeseCake.jpg",
  "cheeseCake.jpg",
  "cheeseCake.jpg",
  "cheeseCake.jpg",
  "cheeseCake.jpg",
  "chocolateCake.jpg",
  "chocolateCake.jpg",
  "chocolateCake.jpg",
  "chocolateCake.jpg",
  "chocolateCake.jpg",
  "chocolateCake.jpg",
  "hazelnutCake.jpg",
  "hazelnutCake.jpg",
  "hazelnutCake.jpg",
  "hazelnutCake.jpg",
  "hazelnutCake.jpg",
  "hazelnutCake.jpg",
];
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CakeCard from "./cakeCard";
import { useState, useEffect } from "react";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
};
const CustomCarousel = ({ data }) => {
  return (
    <div className="mx-10 mb-10">
      <Carousel
        responsive={responsive}
        showDots={true}
        autoPlay={true}
        ssr={true}
        infinite={true}
        itemClass="mb-10"
      >
        {data?.map((item) => (
          <div className="mr-2 pb-5" key={item.id}>
            <CakeCard info={item} like={true} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};
export default CustomCarousel;
