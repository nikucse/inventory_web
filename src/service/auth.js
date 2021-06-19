import { API } from "../backend";
import axios from "axios";

export const register = (user) => {
  return axios
    .post(`${API}/user/register`, user)
    .then((response) => {
      return response.data.json();
    })
    .catch((err) => console.log(err));
};

export const login = (user) => {
  return axios
    .post(`${API}/public/login`, user)
    .then((res) => {
      return res.data;
    })
    .catch((error) => console.error(error));
};

export const authenticate = (data, next) => {
  console.log("auth.authenticate  : ", data);

  if (typeof window !== undefined) {
    localStorage.setItem("jwt", JSON.stringify(data.jwtToken));
    next();
  }
};

export const logout = (next) => {
  if (typeof window !== undefined) {
    localStorage.removeItem("jwt");
    next();
    return fetch(`${API}/user/logout`, {
      method: "GET",
    })
      .then((response) => console.log("Logout Successful"))
      .catch((err) => console.log(err));
  }
};

export const isAuthenticated = () => {
  return typeof window === undefined
    ? false
    : localStorage.getItem("jwt")
    ? JSON.parse(localStorage.getItem("jwt"))
    : false;
};
