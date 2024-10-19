import { AxiosResponse } from "axios";
import { getAxiosAuthRegisterInstance } from "../axios_instance";
import {
  IRegisterData,
  IRegisterResponse,
  IRegisterValues,
} from "../../interfaces/services/auth/register";

const register = async (
  values: IRegisterValues
): Promise<IRegisterResponse> => {
  const registerData: IRegisterData = {
    email: values.email,
    password: values.password,
    returnSecureToken: true,
  };

  const response: AxiosResponse<IRegisterResponse> =
    await getAxiosAuthRegisterInstance().post("", registerData);

  return response.data;
};

export default register;
