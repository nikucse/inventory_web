import { authAxios as axios } from '../util/interceptor';

export const register = (user) => {
  return axios
    .post(`/user/register`, user)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      if (error.response) {
        return error.response.data;
      }
    });
};

export const authenticate = (data, next) => {
  if (typeof window !== undefined) {
    localStorage.setItem('jwt', JSON.stringify(data.jwtToken));
    localStorage.setItem('user', JSON.stringify(data));
    next();
  }
};

export const logoutUser = () => {
  if (localStorage.getItem('jwt')) localStorage.removeItem('jwt');
  if (localStorage.getItem('user')) localStorage.removeItem('user');
};

export const isAuthenticated = () => {
  return typeof window === undefined
    ? false
    : localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : false;
};

export const getUser = () => {
  return typeof window === undefined
    ? false
    : localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : false;
};
