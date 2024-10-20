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

const getAxiosLinksInstance = (): AxiosInstance => {
  return axios.create({
    baseURL: `https://firestore.googleapis.com/v1/projects/${
      import.meta.env.VITE_PROJECT_ID
    }/databases/(default)/documents/links`,
  });
};

const getAxiosRefreshTokenInstance = (): AxiosInstance =>
  axios.create({
    baseURL: `https://securetoken.googleapis.com/v1/token?key=${
      import.meta.env.VITE_API_KEY
    }`,
  });

const getAxiosVerifyUserInstance = (): AxiosInstance =>
  axios.create({
    baseURL: `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${
      import.meta.env.VITE_API_KEY
    }`,
  });

const getAxiosStorageInstance = (): AxiosInstance =>
  axios.create({
    baseURL: `https://firebasestorage.googleapis.com/v0/b/${
      import.meta.env.VITE_PROJECT_ID
    }.appspot.com/o`,
  });

export {
  getAxiosAuthRegisterInstance,
  getAxiosAuthLoginInstance,
  getAxiosLinksInstance,
  getAxiosRefreshTokenInstance,
  getAxiosVerifyUserInstance,
  getAxiosStorageInstance,
};
