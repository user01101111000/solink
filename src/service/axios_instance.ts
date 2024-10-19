import axios, { AxiosInstance } from "axios";

const getAxiosAuthRegisterInstance = (): AxiosInstance => {
  return axios.create({
    baseURL:
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" +
      import.meta.env.VITE_API_KEY,
  });
};

const getAxiosAuthLoginInstance = (): AxiosInstance => {
  return axios.create({
    baseURL:
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" +
      import.meta.env.VITE_API_KEY,
  });
};

export { getAxiosAuthRegisterInstance, getAxiosAuthLoginInstance };
