import { authAxios as axios } from "../util/interceptor";

export const addEmployee = (employee) => {
  return axios
    .post(`${API}/employee`, employee)
    .then((res) => {
      return res.data;
    })
    .catch((error) => console.error(error));
};

export const getAllEmployee = () => {
  return axios
    .get(`${API}/employee`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => console.error(error));
};

export const getEmployeeById = (id) => {
  return axios
    .get(`${API}/employee/${id}`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => console.error(error));
};
