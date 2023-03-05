import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import { BACKEND_BASE_URL } from "./environment";

// create axios instance
const axiosInstance: AxiosInstance = axios.create({
  baseURL: BACKEND_BASE_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

// handle response
export const handleResponse = <T>(response: AxiosResponse<T>): T => {
  return response.data;
};

// handle error
export const handleError = (error: AxiosError) => {
  if (error.response) {
    // console.log("error.response", error.response);
    throw error.response.data;

    // throw {
    //   status: error.response.status,
    //   message: error.response.data,
    // };
  } else if (error.request) {
    console.log("error.request");
    throw {
      message: "No response was received.",
    };
  } else {
    console.log("error error");
    throw {
      message: `Request failed: ${error.message}`,
    };
  }
};

export default axiosInstance;
