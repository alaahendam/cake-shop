import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Favourite from "./favourite";
import Delete from "./delete";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const CakeCard = ({ info, like, callbackF, order }) => {
  const router = useRouter();
  const loginUser = useSelector((state) => state.user.user);
  return (
    <motion.div
      className="w-full rounded-md shadow-lg shadow-pink-500/50 cursor-pointer relative"
      whileHover={{ scale: 1.009 }}
      whileTap={{ scale: 0.99 }}
    >
      <div
        onClick={() =>
          order ? order(info?.id) : router.push(`/cake/${info?.id}`)
        }
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
          <p className="font-medium text-lg  ...">{info?.nameEn ?? "....."}</p>
          <div className="flex justify-between">
            <p className="font-light text-gray-500 ...">
              {info?.flavour?.nameEn ?? "....."}
            </p>
            <p className="font-medium text-gray-500">
              {info?.price ?? "....."} <sub className="text-xs">EGP</sub>
            </p>
          </div>
        </div>
      </div>
      {loginUser ? (
        like ? (
          <Favourite callbackF={callbackF} />
        ) : (
          <Delete callbackF={callbackF} />
        )
      ) : null}
    </motion.div>
  );
};

export default CakeCard;
