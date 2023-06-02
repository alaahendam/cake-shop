import * as React from "react";
import { motion } from "framer-motion";
import styles from "@/styles/mobileNavBar.module.css";
import Link from "next/link";
const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

//const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

export const CustomMenuItem = ({ item, route }) => {
  const style = { border: `1px solid gray` };
  return (
    <motion.div
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className={styles.li}
    >
      {/* <div className={styles["icon-placeholder"]} style={style} /> */}
      <Link
        className={styles["text-placeholder"]}
        style={style}
        href={`${route.toLocaleLowerCase()}`}
      >
        {route}
      </Link>
    </motion.div>
  );
};
