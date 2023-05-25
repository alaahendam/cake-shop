import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function InOutForm({ theme }) {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="standard-basic"
        label="Standard"
        variant="standard"
        InputLabelProps={{
          sx: {
            color: theme.palette.primary.main,
          },
        }}
        sx={{
          borderBottom: `1px solid ${theme.palette.primary.main}`,
          ".css-a6v7lc-MuiInputBase-root-MuiInput-root:hover:not(.Mui-disabled, .Mui-error):before ":
            {
              borderBottom: `1px solid ${theme.palette.primary.main}`,
            },
          ".css-a6v7lc-MuiInputBase-root-MuiInput-root:before": {
            borderBottom: `1px solid ${theme.palette.primary.main}`,
          },
        }}
      />
    </Box>
  );
}

export default InOutForm;
