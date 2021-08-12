import { authAxios as axios } from '../util/interceptor';

export const uploadBill = (bill) => {
  console.log('Request ====> ', bill);
  return axios
    .post(`/bill/add`, bill)
    .then((res) => {
      return res.data;
    })
    .catch((error) => console.error(error));
};

export const getAllBill = () => {
  return axios
    .get(`/bill/list`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => console.error(error));
};

export const getBillByDate = (date) => {
  return axios
    .get(`/bill/date/${date}`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => console.error(error));
};
