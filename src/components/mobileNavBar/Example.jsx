import * as React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useRef } from "react";
import styles from "@/styles/mobileNavBar.module.css";
import { motion, sync, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
import { useSelector } from "react-redux";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@material-ui/core";
const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 208px 40px)`,
    transition: {
      delay: 0.1,
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 208px 40px)",
    transition: {
      delay: 0.01,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export const MobileNavBar = () => {
  const router = useRouter();
  const [isOpen, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen(!isOpen);
  };
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  const loginUser = useSelector((state) => state.user.user);
  useEffect(() => {
    setOpen(false);
  }, [router]);
  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      className={styles.mobileNavBar}
      style={{
        height: isOpen ? "100vh" : "9vh",
      }}
    >
      <motion.div className={styles.background} variants={sidebar} />
      <Navigation isOpen={isOpen} />
      <MenuToggle toggle={() => toggleOpen()} />
      <div
        style={{
          height: "100%",
          width: "50%",
          margin: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        {loginUser ? (
          <Link
            href="/shop"
            style={{
              display: isOpen ? "none" : "block",
            }}
          >
            <Badge badgeContent={4} color="success">
              <ShoppingCartIcon
                sx={{
                  color: "white",
                }}
              />
            </Badge>
          </Link>
        ) : null}
        <div
          style={{
            display: isOpen ? "none" : "block",
          }}
        >
          <SearchIcon />
        </div>
      </div>
    </motion.nav>
  );
};
