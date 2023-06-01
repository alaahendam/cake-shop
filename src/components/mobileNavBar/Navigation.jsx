import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import styles from "@/styles/mobileNavBar.module.css";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Navigation = ({ isOpen }) => (
  <motion.div
    variants={variants}
    className={styles.ul}
    style={{
      display: isOpen ? "flex" : "none",
    }}
  >
    <div
      style={{
        width: "100%",
      }}
    >
      {itemIds.map((item, index) => (
        <MenuItem key={index} item={item} />
      ))}
    </div>
  </motion.div>
);

const itemIds = ["Products", "About", "Blog", "Contact"];
