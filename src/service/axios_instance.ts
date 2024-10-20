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

const getAxiosUsersInstance = (): AxiosInstance => {
  return axios.create({
    baseURL: `https://firestore.googleapis.com/v1/projects/${
      import.meta.env.VITE_PROJECT_ID
    }/databases/(default)/documents/users`,
  });
};

export {
  getAxiosAuthRegisterInstance,
  getAxiosAuthLoginInstance,
  getAxiosUsersInstance,
};
