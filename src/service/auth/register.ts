import { AxiosResponse } from "axios";
import {
  getAxiosAuthRegisterInstance,
  getAxiosLinksInstance,
} from "../axios_instance";
import {
  ILinkData,
  IRegisterData,
  IRegisterResponse,
  IRegisterValues,
} from "../../interfaces/services/auth/register";

const register = async (
  values: IRegisterValues
): Promise<{ data: IRegisterResponse; linkData: ILinkData }> => {
  const registerData: IRegisterData = {
    email: values.email,
    password: values.password,
    displayName: values.username,
    returnSecureToken: true,
  };

  const response: AxiosResponse<IRegisterResponse> =
    await getAxiosAuthRegisterInstance().post("", registerData);

  const data = response.data;

  const link: ILinkData = {
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
      avatar: {
        stringValue:
          "https://firebasestorage.googleapis.com/v0/b/test-26a3b.appspot.com/o/common%2Fpp.webp?alt=media&token=e5029d8e-439c-4de7-8b0e-2f3da589122b",
      },
      fullName: {
        stringValue: "",
      },
      location: {
        stringValue: "",
      },
      about: {
        stringValue: "",
      },
      links: {
        arrayValue: {
          values: [
            {
              mapValue: {
                fields: {
                  label: {
                    stringValue: "",
                  },
                  url: {
                    stringValue: "",
                  },
                },
              },
            },
          ],
        },
      },
    },
  };

  await getAxiosLinksInstance().patch("/" + data.localId, link);

  return { data: data, linkData: link };
};

export default register;
