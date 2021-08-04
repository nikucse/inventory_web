import { authAxios as axios } from "../util/interceptor";

export const addEmployee = (employee) => {
  return axios
    .post(`/employee/add`, employee)
    .then((res) => {
      return res.data;
    })
    .catch((error) => console.error(error));
};

export const getAllEmployee = () => {
  return axios
    .get(`/employee/list`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => console.error(error));
};

export const getEmployeeById = (id) => {
  return axios
    .get(`/employee/${id}`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => console.error(error));
};
