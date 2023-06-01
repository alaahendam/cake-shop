import React, { useState, useEffect } from "react";
import styles from "@/styles/navBar.module.css";
import Link from "next/link";
import { MobileNavBar } from "./mobileNavBar/Example";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import SearchIcon from "@mui/icons-material/Search";

const NavBar = () => {
  console.log("this new navbar");
  const pages = ["Products", "About", "Blog", "Contact", "Login"];
  return (
    <nav className={styles.navBar}>
      <Link href="/" className={styles.logo}>
        Glorious
      </Link>
      <div className={styles.middleLinks}>
        {pages?.map((page, index) => (
          <Link href={`${page.toLocaleLowerCase()}`} key={index}>
            {page}
          </Link>
        ))}
      </div>
      <div className={styles.rightLinks}>
        <Link href="/signup">Sign Up</Link>
        <Link href="/signup">ENG</Link>
        <Link href="/signup">
          <Badge badgeContent={4} color="success">
            <ShoppingCartIcon />
          </Badge>
        </Link>
        <Link href="/signup">
          <SearchIcon />
        </Link>
      </div>

      <div className={styles.mobileNavbarDisplay}>
        <MobileNavBar />
      </div>
    </nav>
  );
};
export default React.memo(NavBar);
