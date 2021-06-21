import { authAxios } from "../util/interceptor";

export const addProduct = (product) => {
  console.log("Product    -===========>  ", product);

  return authAxios
    .post(`/product/add`, product)
    .then((res) => {
      return res.data;
    })
    .catch((error) => console.error(error));
};

export const getAllProduct = () => {
  return authAxios
    .get(`/product`)
    .then((response) => {
      return response.data;
    })
    .catch((err) => console.log(err));
};

export const getProductByDate = (date) => {
  return authAxios
    .get(`/product/${date}`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => console.error(error));
};

export const getProductById = (id) => {
  return authAxios
    .get(`/product/id/${id}`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => console.error(error));
};
