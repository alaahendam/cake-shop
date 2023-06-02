import React, { useState, useEffect } from "react";
import styles from "@/styles/login.module.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { pink, green } from "@mui/material/colors";
import Button from "@mui/material/Button";
import Image from "next/image";
import InOutForm from "@/components/InOutForm";
import { motion } from "framer-motion";
import PrivateRoute from "@/utilities/privateRoute";
const theme = createTheme({
  palette: {
    primary: {
      main: pink[700],
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: pink[700],
      contrastText: "#FFFFFF",
    },
    third: {
      main: "#FFFFFF",
      contrastText: pink[700],
    },
  },
  typography: {
    fontFamily: "Noto Serif Display", // Replace with your desired font family
  },
});

const SignUp = () => {
  const [role, setRole] = useState("CLIENT");
  const AnimatedButton = motion(Button);
  const activeRole = {
    color: theme.palette.secondary.contrastText,
    backgroundColor: theme.palette.secondary.main,
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
    },
    margin: "0px 5px",
  };
  const notActiveRole = {
    backgroundColor: "#fff6ed",
    "&:hover": {
      backgroundColor: "#fff6ed",
    },
    margin: "0px 5px",
  };
  return (
    <ThemeProvider theme={theme}>
      <div
        className={styles.main}
        style={{ backgroundColor: theme.palette.third.main }}
      >
        <div className={styles.form}>
          <h1 style={{ color: theme.palette.third.contrastText }}>Sign Up</h1>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AnimatedButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.99 }}
              sx={role == "CLIENT" ? activeRole : notActiveRole}
              onClick={() => setRole("CLIENT")}
            >
              Customer
            </AnimatedButton>
            <AnimatedButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.99 }}
              sx={role == "COMPANY" ? activeRole : notActiveRole}
              onClick={() => setRole("COMPANY")}
            >
              Shop
            </AnimatedButton>
          </div>
          <InOutForm theme={theme} submitButton="Sign Up" role={role} />
        </div>
        <div className={styles.imgContainer}>
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.09, 1] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
            style={{
              position: "fixed",
            }}
          >
            <Image
              priority
              src="/images/signupCake2.png"
              alt="Example Image"
              width={400}
              height={500}
              className={styles["image-3d"]}
            />
          </motion.div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default PrivateRoute(SignUp, "sign");
