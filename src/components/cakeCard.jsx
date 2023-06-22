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
      onClick={() => router.push("/cake/3")}
    >
      <Image
        priority
        src={`/images/${info.img ? info.img : "cheeseCake.jpg"}`}
        alt="Example Image"
        width={300}
        height={400}
        className="w-full h-60 rounded-t-md"
      />
      <div className="px-5 py-2">
        <p class="font-semibold  ...">The quick brown fox ...</p>
        <p class="font-light ...">The quick brown fox ...</p>
        <p class="font-medium ...">The quick brown fox ...</p>
      </div>
    </motion.div>
  );
};

export default CakeCard;
