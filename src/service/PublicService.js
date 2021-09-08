import { API } from '../backend';
import axios from 'axios';

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
