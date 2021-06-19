import { API } from "../backend";
import axios from "axios";

export const addProduct = (product) => {
  return axios
    .post(`${API}/product`, product)
    .then((res) => {
      return res.data;
    })
    .catch((error) => console.error(error));
};

export const getAllProduct = () => {
  return axios
    .get(`${API}/product`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => console.error(error));
};

export const getProductByDate = (date) => {
  return axios
    .get(`${API}/product/${date}`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => console.error(error));
};

export const getProductById = (id) => {
  return axios
    .get(`${API}/product/id/${id}`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => console.error(error));
};
