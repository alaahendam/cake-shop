import TextField from "@mui/material/TextField";
import { useForm, Controller } from "react-hook-form";
const CheckoutTextInput = ({
  label,
  variant,
  theme,
  error,
  type,
  control,
  name,
  required,
}) => {
  return (
    <div>
      <Controller
        name={name}
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            required
            {...field}
            id={name}
            label={label}
            type={type ? type : "text"}
            variant={variant}
            sx={{
              color: "red",
              width: "100%",
              fontFamily: "Pacifico",
            }}
            InputLabelProps={{
              sx: {
                fontFamily: "Pacifico",
              },
            }}
          />
        )}
      />
    </div>
  );
};
export default CheckoutTextInput;
