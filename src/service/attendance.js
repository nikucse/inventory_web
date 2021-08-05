import { authAxios as axios } from '../util/interceptor';

export const addAttendance = (attendance) => {
  alert(attendance.date);
  return axios
    .post(`/attendance`, attendance)
    .then((res) => {
      return res.data;
    })
    .catch((error) => console.error(error));
};

export const getAllAttendance = () => {
  return axios
    .get(`/attendance`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => console.error(error));
};

export const getAttendanceByDate = (date) => {
  return axios
    .get(`/attendance/${date}`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => console.error(error));
};
