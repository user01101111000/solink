import { AxiosResponse } from "axios";
import { getAxiosLinksInstance } from "../axios_instance";
import { ILinkData } from "../../interfaces/services/auth/register";

async function getLinkInfo() {
  const response: AxiosResponse<any> = await getAxiosLinksInstance().get("");

  return response.data.documents;
}

export default getLinkInfo;
