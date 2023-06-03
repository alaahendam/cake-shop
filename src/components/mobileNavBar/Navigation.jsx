import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CustomMenuItem } from "./MenuItem";
import styles from "@/styles/mobileNavBar.module.css";
import { useSelector, useDispatch } from "react-redux";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@material-ui/core";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { addLoginUser } from "@/redux/features/user";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Navigation = ({ isOpen }) => {
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
          <CustomMenuItem key={index} item={item} route={item} />
        ))}
      </div>
      {loginUser ? (
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link href="/shop">
            <Badge badgeContent={4} color="success">
              <ShoppingCartIcon
                sx={{
                  color: "#c2185b",
                }}
              />
            </Badge>
          </Link>
          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              sx={{
                color: "#c2185b",
              }}
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
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
        </div>
      ) : (
        <div
          style={{
            width: "100%",
          }}
        >
          <CustomMenuItem item="Log In" route="login" />
          <CustomMenuItem item="Sign Up" route="signup" />
        </div>
      )}
    </motion.div>
  );
};

const itemIds = ["Products", "About", "Blog", "Contact"];
