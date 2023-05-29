import React, { useCallback } from "react";
import dynamic from "next/dynamic";
import { useForm, Controller } from "react-hook-form";
import Box from "@mui/material/Box";
import InputText from "./InputText";
import { Button } from "@material-ui/core";
import { motion } from "framer-motion";
import styles from "@/styles/login.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import API from "../utilities/api";
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
  const AnimatedButton = motion(Button);
  const { handleSubmit, control, reset } = useForm();
  const onSubmit = async (formData) => {
    console.log(formData);
    try {
      if (submitButton == "Sign Up") {
        formData.role = role;
        formData.type = "normal";
        const { data } = await API.post("users/signup", formData);
        console.log(data);
      } else {
        console.log("login");
      }
    } catch (error) {
      console.log(error.response.data);
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
        sx={{
          color: theme.palette.secondary.contrastText,
          backgroundColor: theme.palette.secondary.main,
          "&:hover": {
            backgroundColor: theme.palette.secondary.main,
          },
          fontFamily: theme.typography.fontFamily,
          fontWeight: 500,
        }}
        type="submit"
      >
        {submitButton}
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
