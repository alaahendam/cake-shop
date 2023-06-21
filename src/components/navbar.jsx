import React, { useState, useEffect } from "react";
import styles from "@/styles/navBar.module.css";
import Link from "next/link";
import { MobileNavBar } from "./mobileNavBar/Example";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@material-ui/core";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useSelector, useDispatch } from "react-redux";
import { addLoginUser } from "@/redux/features/user";
import { useRouter } from "next/router";
const NavBar = () => {
  const router = useRouter();
  const pages = ["Products", "About", "Blog", "Contact"];
  const loginUser = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogOut = () => {
    setAnchorEl(null);
    localStorage.clear();
    dispatch(addLoginUser(null));
  };
  return (
    <nav
      className={styles.navBar}
      style={{
        backgroundColor:
          router.pathname == "/login" || router.pathname == "/signup"
            ? "#c2185b"
            : "#a71b52",
      }}
    >
      <Link href="/" className={styles.logo}>
        Glorious
      </Link>
      <div className={styles.middleLinks}>
        {pages?.map((page, index) => (
          <Link href={`/${page.toLocaleLowerCase()}`} key={index}>
            {page}
          </Link>
        ))}
        <Link href="/signup">
          <SearchIcon />
        </Link>
      </div>
      <div
        className={styles.rightLinks}
        style={{ width: loginUser ? "15%" : "25%" }}
      >
        {loginUser ? null : <Link href="/signup">Sign Up</Link>}
        {loginUser ? null : <Link href="/login">Log In</Link>}
        <Link href="/signup">
          <Badge badgeContent={4} color="success">
            <ShoppingCartIcon />
          </Badge>
        </Link>
        <Link href="/signup">ENG</Link>

        {loginUser && (
          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              disableScrollLock
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleLogOut}>Log Out</MenuItem>
            </Menu>
          </div>
        )}
      </div>

      <div className={styles.mobileNavbarDisplay}>
        <MobileNavBar />
      </div>
    </nav>
  );
};
export default React.memo(NavBar);
