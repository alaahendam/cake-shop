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
import Image from "next/image";
import CakeCard from "./cakeCard";
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
const CustomCarousel = ({ props }) => {
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
        {imageUrls.map((url, index) => (
          <div className="mr-2 pb-5" key={index}>
            <CakeCard info={{ img: url }} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};
export default CustomCarousel;
