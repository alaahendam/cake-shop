import * as React from "react";
import Box from "@mui/material/Box";
import InputText from "./InputText";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Button } from "@material-ui/core";
import styles from "@/styles/login.module.css";

function InOutForm({ theme }) {
  return (
    <Box
      component="form"
      className={styles.inOutForm}
      noValidate
      autoComplete="off"
    >
      <InputText label="Email" variant="standard" theme={theme} />
      <InputText label="Password" variant="standard" theme={theme} />
      <Button
        sx={{
          color: theme.palette.secondary.contrastText,
          backgroundColor: theme.palette.secondary.main,
          "&:hover": {
            backgroundColor: theme.palette.secondary.main,
          },
        }}
      >
        Login
      </Button>
    </Box>
  );
}

export default InOutForm;
