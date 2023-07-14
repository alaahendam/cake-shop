import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Favourite from "./favourite";
import Delete from "./delete";
import { useRouter } from "next/router";
const CakeCard = ({ info, like, callbackF }) => {
  const router = useRouter();
  return (
    <motion.div
      className="w-full rounded-md shadow-lg shadow-pink-500/50 cursor-pointer relative"
      whileHover={{ scale: 1.009 }}
      whileTap={{ scale: 0.99 }}
    >
      <div onClick={() => router.push(`/cake/${info?.id}`)}>
        <Image
          priority
          src={info?.url ? info.url : "/images/cheeseCake.jpg"}
          alt="Example Image"
          width={300}
          height={400}
          className="w-full h-48 md:h-60 rounded-t-md"
        />
        <div className="px-5 py-2">
          <p className="font-semibold  ...">{info?.nameEn ?? "....."}</p>
          <p className="font-light ...">{info?.flavour?.nameEn ?? "....."}</p>
          <p className="font-medium ...">{info?.price ?? "....."}</p>
        </div>
      </div>
      {like ? (
        <Favourite callbackF={callbackF} />
      ) : (
        <Delete callbackF={callbackF} />
      )}
    </motion.div>
  );
};

export default CakeCard;
