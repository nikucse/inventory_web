import { authAxios as axios } from '../util/interceptor';

export const addOrder = (client) => {
  return axios
    .post(`/order/add`, client)
    .then((res) => {
      return res.data;
    })
    .catch((error) => console.error(error));
};

export const getAllOrder = () => {
  return axios
    .get(`/order/list`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => console.error(error));
};

export const getPendingOrCompletedOrders = () => {
  return axios
    .get(`/order/list/pending-completed`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => console.error(error));
};

export const getOrderById = (id) => {
  return axios
    .get(`/order/${id}`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => console.error(error));
};
