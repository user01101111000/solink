import { AxiosResponse } from "axios";
import {
  ILoginData,
  ILoginResponse,
  ILoginValues,
} from "../../interfaces/services/auth/login";
import { getAxiosAuthLoginInstance } from "../axios_instance";

const login = async (values: ILoginValues): Promise<ILoginResponse> => {
  const loginData: ILoginData = {
    email: values.email,
    password: values.password,
    returnSecureToken: true,
  };

  const response: AxiosResponse<ILoginResponse> =
    await getAxiosAuthLoginInstance().post("", loginData);

  return response.data;
};

export default login;
