import { API } from "../backend.js";

export const register = (user) => {
  return fetch(`${API}/user/register`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const login = (user) => {
  const api = "http://localhost:8181/technuzone/public/login";

  console.log(api, "=========>", user);

  return fetch(`${api}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const authenticate = (data, next) => {
  if (typeof window !== undefined) {
    localStorage.setItem("jwt", JSON.stringify(data));
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
