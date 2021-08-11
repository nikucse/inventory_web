import { authAxios as axios } from '../util/interceptor';

export const addExpense = (expense) => {
  console.log(expense);
  return axios
    .post(`/expense/add`, expense)
    .then((res) => {
      return res.data;
    })
    .catch((error) => console.error(error));
};

export const updateExpense = (expense) => {
  console.log(expense);
  return axios
    .put(`/expense/update/${expense.id}`, expense)
    .then((res) => {
      return res.data;
    })
    .catch((error) => console.error(error));
};

export const getAllExpense = () => {
  return axios
    .get(`/expense/list`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => console.error(error));
};

export const getExpenseByDate = (date) => {
  return axios
    .get(`/expense/${date}`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => console.error(error));
};

export const getExpenseById = (id) => {
  return axios
    .get(`/expense/id/${id}`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => console.error(error));
};
