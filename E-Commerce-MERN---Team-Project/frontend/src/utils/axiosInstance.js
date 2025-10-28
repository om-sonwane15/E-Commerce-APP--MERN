// src/utils/axiosInstance.js
import axios from "axios";

// Create an axios instance
const axiosInstance = axios.create({
  baseURL: "https://e-commerce-app-6gmk.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem("userToken");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;




