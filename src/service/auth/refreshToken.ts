import { AxiosResponse } from "axios";
import {
  IBodyRefreshToken,
  IRefreshTokenResponse,
} from "../../interfaces/services/auth/refreshToken";
import { getAxiosRefreshTokenInstance } from "../axios_instance";

async function refreshToken(refresh_token: string) {
  const bodyData: IBodyRefreshToken = {
    grant_type: "refresh_token",
    refresh_token: refresh_token,
  };

  const response: AxiosResponse<IRefreshTokenResponse> =
    await getAxiosRefreshTokenInstance().post("", bodyData);

  return response.data;
}

export default refreshToken;
