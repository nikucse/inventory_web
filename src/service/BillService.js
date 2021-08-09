import { authAxios as axios } from "../util/interceptor";

export const addBill = (bill) => {
  return axios
    .post(`${API}/bill`, bill)
    .then((res) => {
      return res.data;
    })
    .catch((error) => console.error(error));
};

export const getAllBill = () => {
  return axios
    .get(`${API}/bill`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => console.error(error));
};

export const getBillByDate = (date) => {
  return axios
    .get(`${API}/bill/${date}`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => console.error(error));
};
