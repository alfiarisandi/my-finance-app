import axios from "axios";
import Cookies from "js-cookie";

const BASE_URL_BE = process.env.NEXT_PUBLIC_BASE_URL;

const AxiosInstance = axios.create({
  timeout: 20000,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-type": "application/json",
    "Access-Control-Allow-Methods": " POST, PUT, PATCH, GET, DELETE, OPTIONS",
    "Access-Control-Allow-Headers":
      "Origin, X-Api-Key, X-Requested-With, Content-Type, Accept, Authorization",
  },
  baseURL: BASE_URL_BE,
});

AxiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (
      error?.response?.status === 401 &&
      error?.response?.data?.error?.message ===
        "Full authentication is required to access this resource"
    ) {
      const cookies = Cookies.get();
      for (const cookie in cookies) {
        Cookies.remove(cookie);
      }
      window.location.replace(window.location.origin);
    }

    if (error?.response === undefined) {
      error.message = "Network Error: Please check your internet connection.";
      // return Promise.reject(error);
    }

    return Promise.reject(error);
    // return Promise.reject(error?.response);
  }
);

export default AxiosInstance;
