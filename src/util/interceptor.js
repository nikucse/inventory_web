import axios from "axios";
import { API } from "../backend";

const token = JSON.parse(localStorage.getItem("jwt"));

export const authAxios = axios.create({
  baseURL: API,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

// Add a request interceptor
axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent

    Object.assign(config);

    console.log(config);
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data

    console.log(response);

    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
