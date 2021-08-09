import { authAxios as axios } from '../util/interceptor';
import { API } from '../backend';

export const addOrder = (client) => {
  return axios
    .post(`${API}/order/add`, client)
    .then((res) => {
      return res.data;
    })
    .catch((error) => console.error(error));
};

export const getAllOrder = () => {
  return axios
    .get(`${API}/order/list`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => console.error(error));
};

export const getOrderById = (id) => {
  return axios
    .get(`${API}/order/${id}`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => console.error(error));
};
