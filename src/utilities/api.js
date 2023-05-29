import axios from "axios";
const publicURL = "https://e-commerce-45z5.onrender.com/";
const localURL = "http://localhost:7070";
const request = axios.create({
  baseURL: publicURL,
  headers: {
    "Content-Type": "application/json",
    crossdomain: true,
  },
});

request.interceptors.request.use((config) => {
  let token = localStorage.getItem("token");
  if (token) {
    config.headers["x-access-token"] = `${token}`;
  }
  return config;
});

export default request;
