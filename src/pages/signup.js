import styles from "@/styles/login.module.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { pink, green } from "@mui/material/colors";
import Button from "@mui/material/Button";
import Image from "next/image";
import InOutForm from "@/components/InOutForm";

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
});

const Login = () => {
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
          <Image
            src="/images/signupCake2.png"
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

export default Login;
