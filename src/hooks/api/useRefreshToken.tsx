import { useMutation } from "@tanstack/react-query";
import refreshToken from "../../service/auth/refreshToken";
import { IRefreshTokenResponse } from "../../interfaces/services/auth/refreshToken";
import { encryptToken } from "../../utils/auth/cryptoID";
import { ITOK } from "../../interfaces/context/auth_context";
import useAuth from "../context/useAuth";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../interfaces/lib/store";
import { ILinkInfo } from "../../interfaces/lib/features/userSlice/userSlice";
import { setUserInfo } from "../../lib/features/userSlice/userSlice";
import { ILinkData } from "../../interfaces/services/auth/register";

const useRefreshToken = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { login } = useAuth();

  return useMutation({
    mutationFn: refreshToken,

    onSuccess: (result: { data: IRefreshTokenResponse; userInfo: any }) => {
      const idToken = encryptToken(result.data.id_token);
      const refreshToken = encryptToken(result.data.refresh_token);
      const id = result.data.user_id;

      const tokens: ITOK = {
        so_i: idToken,
        so_r: refreshToken,
        so_id: id,
      };

      const userData: ILinkInfo = {
        email: result.userInfo.fields.email.stringValue,
        username: result.userInfo.fields.username.stringValue,
        id: result.userInfo.fields.id.stringValue,
        idToken,
        fullName: result.userInfo.fields.fullName.stringValue,
        avatar: result.userInfo.fields.avatar.stringValue,
        location: result.userInfo.fields.location.stringValue,
        about: result.userInfo.fields.about.stringValue,
        links: result.userInfo.fields.links.arrayValue.values,
        generated: result.userInfo.fields.generated.stringValue,
      };

      dispatch(setUserInfo(userData));

      localStorage.setItem("so_i&r", JSON.stringify(tokens));

      login(tokens);
    },
  });
};

export default useRefreshToken;
