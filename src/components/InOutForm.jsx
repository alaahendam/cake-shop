import * as React from "react";
import { useForm, Controller } from "react-hook-form";
import Box from "@mui/material/Box";
import InputText from "./InputText";
import { Button } from "@material-ui/core";
import { motion } from "framer-motion";
import styles from "@/styles/login.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";

function InOutForm({ theme, submitButton }) {
  const AnimatedButton = motion(Button);
  const { handleSubmit, control, reset } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <Box
      component="form"
      className={styles.inOutForm}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
    >
      {submitButton == "Sign Up" ? (
        <InputText
          required
          label="First Name"
          variant="standard"
          theme={theme}
          control={control}
          name="firstName"
        />
      ) : null}
      <InputText
        required
        label="Email"
        variant="standard"
        theme={theme}
        control={control}
        name="email"
      />
      <InputText
        required
        label="Password"
        variant="standard"
        theme={theme}
        type="password"
        control={control}
        name="password"
      />
      <motion.div />
      <AnimatedButton
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.99 }}
        sx={{
          color: theme.palette.secondary.contrastText,
          backgroundColor: theme.palette.secondary.main,
          "&:hover": {
            backgroundColor: theme.palette.secondary.main,
          },
        }}
        type="submit"
      >
        {submitButton}
      </AnimatedButton>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          color: theme.palette.primary.main,
        }}
      >
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
          <FacebookIcon sx={{ cursor: "pointer", fontSize: "35px" }} />
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
          <GoogleIcon sx={{ cursor: "pointer", fontSize: "35px" }} />
        </motion.div>
      </div>
    </Box>
  );
}

export default InOutForm;
