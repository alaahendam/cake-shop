import styles from "@/styles/login.module.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { pink, green } from "@mui/material/colors";
import Button from "@mui/material/Button";
import Image from "next/image";
import InOutForm from "@/components/InOutForm";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFFFFF",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#ab9178",
      contrastText: pink[700],
    },
    third: {
      main: pink[700],
      contrastText: "#FFFFFF",
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
          <h1>Login</h1>
          <InOutForm theme={theme} />
        </div>
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

export default Login;
