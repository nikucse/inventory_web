import { authAxios as axios } from '../util/interceptor';

export const addClient = (client) => {
  return axios
    .post(`/client/add`, client)
    .then((res) => {
      return res.data;
    })
    .catch((error) => console.error(error));
};

export const addAssignClient = (client) => {
  console.log('Client=====> ', client);
  return axios
    .put(`/client/add/product/${client.id}`, client)
    .then((res) => {
      return res.data;
    })
    .catch((error) => console.error(error));
};

export const updateClient = (client) => {
  return axios
    .put(`/client/update/${client.id}`, client)
    .then((res) => {
      return res.data;
    })
    .catch((error) => console.error(error));
};

export const getAllClient = () => {
  return axios
    .get(`/client/list`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => console.error(error));
};

export const getClientById = (id) => {
  return axios
    .get(`/client/${id}`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => console.error(error));
};
