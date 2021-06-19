import { API } from "../backend";
import axios from "axios";

export const addExpense = (expense) => {
  return axios
    .post(`${API}/expense`, expense)
    .then((res) => {
      return res.data;
    })
    .catch((error) => console.error(error));
};

export const getAllExpense = () => {
  return axios
    .get(`${API}/expense`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => console.error(error));
};

export const getExpenseByDate = (date) => {
  return axios
    .get(`${API}/expense/${date}`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => console.error(error));
};

export const getExpenseById = (id) => {
  return axios
    .get(`${API}/expense/id/${id}`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => console.error(error));
};
