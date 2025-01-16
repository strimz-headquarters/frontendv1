import axios from "axios";

export const defaultAxiosInstance = axios.create({
  baseURL: "https://strimz-backend.onrender.com/api/v1/",
  headers: {
    "Content-Type": "application/json",
  },
});

// accesstoken
const axiosInstanceWithToken = axios.create({
  baseURL: "https://strimz-backend.onrender.com/api/v1/",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstanceWithToken.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstanceWithToken;
