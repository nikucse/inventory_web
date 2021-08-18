import { API } from '../backend';
import axios from 'axios';

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
      console.log(res);
      return res.data;
    })
    .catch((error) => {
      if (error.response) {
        return error.response.data;
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log(error.message);
      }

      return error.data;
    });
};

export const authenticate = (data, next) => {
  if (typeof window !== undefined) {
    localStorage.setItem('jwt', JSON.stringify(data.jwtToken));
    localStorage.setItem('user', JSON.stringify(data));
    next();
  }
};

export const logoutUser = () => {
  if (localStorage.getItem('jwt')) localStorage.removeItem('jwt');
  if (localStorage.getItem('user')) localStorage.removeItem('user');
};

export const isAuthenticated = () => {
  return typeof window === undefined
    ? false
    : localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : false;
};

export const getUser = () => {
  return typeof window === undefined
    ? false
    : localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : false;
};
