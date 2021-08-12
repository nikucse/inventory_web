import { authAxios as axios } from '../util/interceptor';

export const addPurchasingProduct = (bill) => {
  console.log('Request ====> ', bill);
  return axios
    .post(`/purchasing/add`, bill)
    .then((res) => {
      return res.data;
    })
    .catch((error) => console.errpurchasingor(error));
};

export const getAllPurchasingProduct = () => {
  return axios
    .get(`/purchasing/list`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => console.error(error));
};
