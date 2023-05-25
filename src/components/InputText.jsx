import TextField from "@mui/material/TextField";
const InputText = ({ label, variant, theme, error }) => {
  return (
    <TextField
      id="standard-basic"
      label={label}
      variant={variant}
      InputLabelProps={{
        sx: {
          color: theme.palette.primary.main,
        },
      }}
      sx={{
        width: "100%",
        ".css-1x51dt5-MuiInputBase-input-MuiInput-input": {
          color: theme.palette.primary.main,
        },
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
  );
};
export default InputText;
