import { AxiosResponse } from "axios";
import {
  IBodyRefreshToken,
  IRefreshTokenResponse,
} from "../../interfaces/services/auth/refreshToken";
import {
  getAxiosRefreshTokenInstance,
  getAxiosLinksInstance,
} from "../axios_instance";
import { ILinkData } from "../../interfaces/services/auth/register";

async function refreshToken(refresh_token: string) {
  const bodyData: IBodyRefreshToken = {
    grant_type: "refresh_token",
    refresh_token: refresh_token,
  };

  const response: AxiosResponse<IRefreshTokenResponse> =
    await getAxiosRefreshTokenInstance().post("", bodyData);

  const data = response.data;

  const responseUserInfo: AxiosResponse<ILinkData> =
    await getAxiosLinksInstance().get("/" + data.user_id);

  return { data, userInfo: responseUserInfo.data };
}

export default refreshToken;
