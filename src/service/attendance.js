import { API } from "../backend";
import axios from "axios";

export const addAttendance = (attendance) => {
  return axios
    .post(`${API}/attendance`, attendance)
    .then((res) => {
      return res.data;
    })
    .catch((error) => console.error(error));
};

export const getAllAttendance = () => {
  return axios
    .get(`${API}/attendance`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => console.error(error));
};

export const getAttendanceByDate = (date) => {
  return axios
    .get(`${API}/attendance/${date}`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => console.error(error));
};
