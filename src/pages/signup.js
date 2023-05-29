import React, { useState, useEffect } from "react";
import styles from "@/styles/login.module.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { pink, green } from "@mui/material/colors";
import Button from "@mui/material/Button";
import Image from "next/image";
import InOutForm from "@/components/InOutForm";
import { motion } from "framer-motion";

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
  return (
    <ThemeProvider theme={theme}>
      <div
        className={styles.main}
        style={{ backgroundColor: theme.palette.third.main }}
      >
        <div className={styles.form}>
          <h1 style={{ color: theme.palette.third.contrastText }}>Sign Up</h1>
          <InOutForm theme={theme} submitButton="Sign Up" />
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

export default SignUp;
