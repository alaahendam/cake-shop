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

export const Navigation = () => (
  <motion.ul variants={variants} className={styles.ul}>
    {itemIds.map((item, index) => (
      <MenuItem i={index} key={index} item={item} />
    ))}
  </motion.ul>
);

const itemIds = ["Products", "About", "Blog", "Contact", "Login"];
