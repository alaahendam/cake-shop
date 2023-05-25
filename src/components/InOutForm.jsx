import * as React from "react";
import Box from "@mui/material/Box";
import InputText from "./InputText";
import { Button } from "@material-ui/core";
import { motion } from "framer-motion";
import styles from "@/styles/login.module.css";

function InOutForm({ theme, submitButton }) {
  const AnimatedButton = motion(Button);
  return (
    <Box
      component="form"
      className={styles.inOutForm}
      noValidate
      autoComplete="off"
    >
      {submitButton == "Sign Up" ? (
        <InputText label="First Name" variant="standard" theme={theme} />
      ) : null}
      <InputText label="Email" variant="standard" theme={theme} />
      <InputText label="Password" variant="standard" theme={theme} />
      <motion.div />
      <AnimatedButton
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        sx={{
          color: theme.palette.secondary.contrastText,
          backgroundColor: theme.palette.secondary.main,
          "&:hover": {
            backgroundColor: theme.palette.secondary.main,
          },
        }}
      >
        {submitButton}
      </AnimatedButton>
    </Box>
  );
}

export default InOutForm;
