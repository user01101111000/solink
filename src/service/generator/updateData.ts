import { posts } from "./../../../node_modules/@reduxjs/toolkit/src/query/tests/mocks/handlers";
import { isObject } from "formik";
import { IAllInputValues } from "../../interfaces/components/Input";
import {
  getAxiosLinksInstance,
  getAxiosStorageInstance,
} from "../axios_instance";
import convertToFirebaseImageURL from "../../utils/firebase/convertToFirebaseImageURL ";

async function updateData({
  values,
  otherData,
}: {
  values: IAllInputValues;
  otherData: {
    id: string;
    email?: string;
    username?: string;
  };
}) {
  let reworkedAvatar: string | File = values.avatar;

  if (isObject(values.avatar)) {
    const response = await getAxiosStorageInstance().post(
      `/avatars%2F${otherData.id}.png`,
      values.avatar,
      {
        headers: {
          "Content-Type": values.avatar.type,
        },
      }
    );

    reworkedAvatar = convertToFirebaseImageURL(
      "avatars",
      otherData.id,
      response.data?.downloadTokens
    );
  }

  const requestData = {
    fields: {
      avatar: {
        stringValue: reworkedAvatar,
      },
      location: {
        stringValue: values.location,
      },
      about: {
        stringValue: values.about,
      },
      fullName: {
        stringValue: values.fullName,
      },

      username: {
        stringValue: otherData.username,
      },

      email: {
        stringValue: otherData.email,
      },

      id: {
        stringValue: otherData.id,
      },

      links: {
        arrayValue: {
          values: values.links.map((link) => {
            return {
              mapValue: {
                fields: {
                  label: {
                    stringValue: link.label,
                  },
                  url: {
                    stringValue: link.url,
                  },
                },
              },
            };
          }),
        },
      },
    },
  };

  await getAxiosLinksInstance().patch(`/${otherData.id}`, requestData);
}

export default updateData;
