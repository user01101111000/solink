import { useMutation } from "@tanstack/react-query";
import login from "../../service/auth/login";
import { ILoginResponse } from "../../interfaces/services/auth/login";
import useAuth from "../context/useAuth";
import { useNavigate } from "react-router-dom";
import { encryptToken } from "../../utils/auth/cryptoID";
import { ITOK } from "../../interfaces/context/auth_context";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../interfaces/lib/store";
import { setUserInfo } from "../../lib/features/userSlice/userSlice";
import { ILinkInfo } from "../../interfaces/lib/features/userSlice/userSlice";

const useAuthLogin = () => {
  const { login: loginFn } = useAuth();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: login,
    onSuccess: (result: { data: ILoginResponse; linkData: any }) => {
      const idToken = encryptToken(result.data.idToken);
      const refreshToken = encryptToken(result.data.refreshToken);
      const id = result.data.localId;

      const tokens: ITOK = {
        so_i: idToken,
        so_r: refreshToken,
        so_id: id,
      };

      const userData: ILinkInfo = {
        email: result.linkData.fields.email.stringValue,
        username: result.linkData.fields.username.stringValue,
        id: result.linkData.fields.id.stringValue,
        idToken,
        fullName: result.linkData.fields.fullName.stringValue,
        avatar: result.linkData.fields.avatar.stringValue,
        location: result.linkData.fields.location.stringValue,
        about: result.linkData.fields.about.stringValue,
        links: result.linkData.fields.links.arrayValue.values,
      };

      dispatch(setUserInfo(userData));

      localStorage.setItem("so_i&r", JSON.stringify(tokens));

      loginFn(tokens);
      navigate("/home/" + id);
    },
  });
};

export default useAuthLogin;
