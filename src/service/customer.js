import { authAxios as axios } from '../util/interceptor';

export const addClient = (client) => {
  return axios
    .post(`${API}/client`, client)
    .then((res) => {
      return res.data;
    })
    .catch((error) => console.error(error));
};

export const getAllClient = () => {
  return axios
    .get(`${API}/client`)
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
