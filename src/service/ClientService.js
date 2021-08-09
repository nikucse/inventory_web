import { authAxios as axios } from '../util/interceptor';
import { API } from '../backend';

export const addClient = (client) => {
  return axios
    .post(`${API}/client/add`, client)
    .then((res) => {
      return res.data;
    })
    .catch((error) => console.error(error));
};

export const getAllClient = () => {
  return axios
    .get(`${API}/client/list`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => console.error(error));
};

export const getClientById = (id) => {
  return axios
    .get(`${API}/client/${id}`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => console.error(error));
};
