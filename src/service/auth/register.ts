import { AxiosResponse } from "axios";
import {
  getAxiosAuthRegisterInstance,
  getAxiosUsersInstance,
} from "../axios_instance";
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
    displayName: values.username,
    returnSecureToken: true,
  };

  const response: AxiosResponse<IRegisterResponse> =
    await getAxiosAuthRegisterInstance().post("", registerData);

  const data = response.data;

  const userInfo = {
    fields: {
      id: {
        stringValue: data.localId,
      },
      email: {
        stringValue: values.email,
      },
      username: {
        stringValue: values.username,
      },
    },
  };

  await getAxiosUsersInstance().patch("/" + data.localId, userInfo);

  return data;
};

export default register;
