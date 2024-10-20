import { AxiosResponse } from "axios";
import {
  ILoginData,
  ILoginResponse,
  ILoginValues,
} from "../../interfaces/services/auth/login";
import {
  getAxiosAuthLoginInstance,
  getAxiosLinksInstance,
} from "../axios_instance";
import { ILinkData } from "../../interfaces/services/auth/register";

const login = async (
  values: ILoginValues
): Promise<{ data: ILoginResponse; linkData: ILinkData }> => {
  const loginData: ILoginData = {
    email: values.email,
    password: values.password,
    returnSecureToken: true,
  };

  const response: AxiosResponse<ILoginResponse> =
    await getAxiosAuthLoginInstance().post("", loginData);

  const data = response.data;

  const responseUserInfo: AxiosResponse<ILinkData> =
    await getAxiosLinksInstance().get("/" + data.localId);

  return { data, linkData: responseUserInfo.data };
};

export default login;
