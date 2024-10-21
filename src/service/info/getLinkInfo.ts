import { AxiosResponse } from "axios";
import { getAxiosLinksInstance } from "../axios_instance";
import { ILinkData } from "../../interfaces/services/auth/register";

async function getLinkInfo(id: string) {
  const response: AxiosResponse<ILinkData> = await getAxiosLinksInstance().get(
    "/" + id
  );

  return response.data;
}

export default getLinkInfo;
