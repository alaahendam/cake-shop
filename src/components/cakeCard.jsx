import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useRouter } from "next/router";
const CakeCard = ({ info }) => {
  const router = useRouter();
  return (
    <motion.div
      className="w-full rounded-md shadow-lg shadow-pink-500/50 cursor-pointer"
      whileHover={{ scale: 1.009 }}
      whileTap={{ scale: 0.99 }}
      onClick={() => router.push(`/cake/${info?.id}`)}
    >
      <Image
        priority
        src={info?.url ? info.url : "/images/cheeseCake.jpg"}
        alt="Example Image"
        width={300}
        height={400}
        className="w-full h-48 md:h-60 rounded-t-md"
      />
      <div className="px-5 py-2">
        <p class="font-semibold  ...">{info?.nameEn ?? "....."}</p>
        <p class="font-light ...">{info?.nameEn?.split(" ")[0] ?? "....."}</p>
        <p class="font-medium ...">{info?.price ?? "....."}</p>
      </div>
    </motion.div>
  );
};

export default CakeCard;
