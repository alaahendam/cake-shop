import styles from "@/styles/login.module.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { pink, green } from "@mui/material/colors";
import Button from "@mui/material/Button";
import Image from "next/image";

const theme = createTheme({
  palette: {
    primary: {
      main: pink[700],
      contrastText: green[500],
    },
    secondary: {
      main: green[500],
      contrastText: pink[700],
    },
  },
});

const SignUp = () => {
  return (
    <ThemeProvider theme={theme}>
      <div
        className={styles.main}
        style={{ backgroundColor: theme.palette.primary.main }}
      >
        {/* <Button variant="contained" color="secondary">
          Pink Background, Green Font
        </Button>
        <Button variant="contained" color="primary">
          White Background, Pink Font
        </Button>
        login */}
        <div className={styles.form}></div>
        <div className={styles.imgContainer}>
          <Image
            src="/images/loginCake.webp"
            alt="Example Image"
            width={400}
            height={500}
            className={styles["image-3d"]}
          />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default SignUp;
