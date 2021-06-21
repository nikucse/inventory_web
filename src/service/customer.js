import { authAxios as axios } from "../util/interceptor";

export const addCustomer = (customer) => {
  return axios
    .post(`${API}/customer`, customer)
    .then((res) => {
      return res.data;
    })
    .catch((error) => console.error(error));
};

export const getAllCustomer = () => {
  return axios
    .get(`${API}/customer`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => console.error(error));
};

export const getCustomerById = (id) => {
  return axios
    .get(`${API}/customer/${id}`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => console.error(error));
};
