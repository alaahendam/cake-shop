import TextField from "@mui/material/TextField";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";

const InputText = ({ label, variant, theme, error, type, control, name }) => {
  const [visibility, setVisibility] = useState(true);

  return (
    <div style={{ position: "relative" }}>
      <Controller
        name={name}
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            id={name}
            label={label}
            type={type && visibility ? type : "text"}
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
              ".css-a6v7lc-MuiInputBase-root-MuiInput-root:hover:not(.Mui-disabled, .Mui-error):before":
                {
                  borderBottom: `1px solid ${theme.palette.primary.main}`,
                },
              ".css-a6v7lc-MuiInputBase-root-MuiInput-root:before": {
                borderBottom: `1px solid ${theme.palette.primary.main}`,
              },
            }}
          />
        )}
      />
      {type === "password" &&
        (visibility ? (
          <VisibilityIcon
            sx={{
              position: "absolute",
              right: "10px",
              top: "20px",
              cursor: "pointer",
              color: theme.palette.primary.main,
            }}
            onClick={() => setVisibility(!visibility)}
          />
        ) : (
          <VisibilityOffIcon
            sx={{
              position: "absolute",
              right: "10px",
              top: "20px",
              cursor: "pointer",
              color: theme.palette.primary.main,
            }}
            onClick={() => setVisibility(!visibility)}
          />
        ))}
    </div>
  );
};

export default InputText;
