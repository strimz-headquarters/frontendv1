import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://strimz-backend.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
