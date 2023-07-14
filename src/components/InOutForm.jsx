import React, { useCallback, useState } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useForm, Controller } from "react-hook-form";
import Box from "@mui/material/Box";
import InputText from "./InputText";
import { Button } from "@material-ui/core";
import { motion } from "framer-motion";
import styles from "@/styles/login.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import API from "../utilities/api";
import CircularProgress from "@mui/material/CircularProgress";
import toast from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import { addLoginUser } from "@/redux/features/user";
const LoginSocialGoogle = dynamic(
  () =>
    import("reactjs-social-login").then((module) => module.LoginSocialGoogle),
  { ssr: false }
);
const LoginSocialFacebook = dynamic(
  () =>
    import("reactjs-social-login").then((module) => module.LoginSocialFacebook),
  { ssr: false }
);
function InOutForm({ theme, submitButton, role }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const [loadingLogin, setLoadingLogin] = useState(false);
  const AnimatedButton = motion(Button);
  const { handleSubmit, control, reset } = useForm();
  const onSubmit = async (formData) => {
    setLoadingLogin(true);
    if (!formData.type) {
      formData.type = "normal";
    }
    try {
      if (submitButton === "Sign Up") {
        formData.role = role;
        toast.promise(
          API.post("users/signup", formData),
          {
            loading: "Loading",
            success: (data) => {
              setLoadingLogin(false);
              dispatch(addLoginUser(data?.data));
              return `${data?.data?.msg}`;
            },
            error: (data) => {
              setLoadingLogin(false);
              return `${
                data?.response?.data?.msg
                  ? data?.response?.data?.msg
                  : data?.response?.data?.errors?.map((error) => error.msg)
              }`;
            },
          },
          {
            style: {
              minWidth: "250px",
            },
            success: {
              duration: 5000,
              icon: "🔥",
            },
          }
        );
      } else {
        toast.promise(
          API.post("users/login", formData),
          {
            loading: "Loading",
            success: (data) => {
              setLoadingLogin(false);
              dispatch(addLoginUser(data?.data));
              return `${data?.data?.msg}`;
            },
            error: (data) => {
              setLoadingLogin(false);
              return `${
                data?.response?.data?.msg
                  ? data?.response?.data?.msg
                  : data?.response?.data?.errors?.map((error) => error.msg)
              }`;
            },
          },
          {
            style: {
              minWidth: "250px",
            },
            success: {
              duration: 5000,
              icon: "🔥",
            },
          }
        );
      }
    } catch (error) {
      setLoadingLogin(false);
      if (error.response && error.response.data) {
        console.log(error.response.data);
      } else {
        console.log(error);
      }
    }
  };

  // const onLoginStart = useCallback(() => {
  //   alert("login start");
  // }, []);

  const onLogoutSuccess = useCallback(() => {
    setProfile(null);
    setProvider("");
    alert("logout success");
  }, []);
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
          required={true}
          label="First Name"
          variant="standard"
          theme={theme}
          control={control}
          name="fName"
        />
      ) : null}
      <InputText
        required={true}
        label="Email"
        variant="standard"
        theme={theme}
        control={control}
        name="email"
      />
      <InputText
        required={true}
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
        disabled={loadingLogin}
        style={{
          backgroundColor: theme.palette.secondary.main,
          fontFamily: "Pacifico",
        }}
        sx={{
          color: theme.palette.secondary.contrastText,

          "&:hover": {
            backgroundColor: theme.palette.secondary.main,
          },
          fontFamily: theme.typography.fontFamily,
          fontWeight: 500,
        }}
        type="submit"
      >
        {loadingLogin ? (
          <CircularProgress
            style={{
              color: theme.palette.secondary.contrastText,
              width: "26px",
              height: "26px",
            }}
            disableShrink
          />
        ) : (
          submitButton
        )}
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
          <LoginSocialFacebook
            isOnlyGetToken
            appId={process.env.REACT_APP_FB_APP_ID || "270937368714202"}
            //onLoginStart={onLoginStart}
            onResolve={({ provider, data }) => {
              console.log(provider);
              console.log(data);
            }}
            onReject={(err) => {
              console.log(err);
            }}
          >
            <FacebookIcon sx={{ cursor: "pointer", fontSize: "38px" }} />
          </LoginSocialFacebook>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
          {typeof window !== "undefined" && (
            <LoginSocialGoogle
              //isOnlyGetToken
              client_id={
                process.env.REACT_APP_FB_APP_ID ||
                "1031101558686-acqpgig5st4ujs9qteudor15afcedbke.apps.googleusercontent.com"
              }
              scope="profile email"
              //onLoginStart={onLoginStart}
              onResolve={({ provider, data }) => {
                console.log(provider);
                console.log(data);
                onSubmit({
                  email: data.email,
                  type: "social",
                  fName: data.name,
                });
              }}
              onReject={(err) => {
                console.log(err);
              }}
            >
              <GoogleIcon sx={{ cursor: "pointer", fontSize: "35px" }} />
            </LoginSocialGoogle>
          )}
        </motion.div>
      </div>
    </Box>
  );
}

export default InOutForm;
