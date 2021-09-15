import { authAxios } from '../util/interceptor';

export const addProduct = (product) => {
  return authAxios
    .post(`/product/add`, product)
    .then((res) => {
      return res.data;
    })
    .catch((error) => console.error(error));
};

export const updateProduct = (product) => {
  return authAxios
    .post(`/product/update/${product.id}`, product)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      alert(error);
      if (error.response) {
        return error.response.data;
      }
    });
};

export const getAllProduct = () => {
  return authAxios
    .get(`/product/list`)
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
    .get(`/product/${id}`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => console.error(error));
};
