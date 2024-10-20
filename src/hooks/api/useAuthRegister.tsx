import { useMutation } from "@tanstack/react-query";
import register from "../../service/auth/register";
import {
  ILinkData,
  IRegisterResponse,
} from "../../interfaces/services/auth/register";
import useAuth from "../context/useAuth";
import { useNavigate } from "react-router-dom";
import { encryptToken } from "../../utils/auth/cryptoID";
import { ITOK } from "../../interfaces/context/auth_context";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../../lib/features/userSlice/userSlice";

const useAuthRegister = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return useMutation({
    mutationFn: register,
    onSuccess: (result: { data: IRegisterResponse; linkData: ILinkData }) => {
      const idToken = encryptToken(result.data.idToken);
      const refreshToken = encryptToken(result.data.refreshToken);
      const id = result.data.localId;

      const tokens: ITOK = {
        so_i: idToken,
        so_r: refreshToken,
        so_id: id,
      };

      const linkInfo = {
        id: id,
        email: result.data.email,
        username: result.linkData.fields.username.stringValue,
        idToken: idToken,
        fullName: result.linkData.fields.fullName.stringValue,
        avatar: result.linkData.fields.avatar.stringValue,
        location: result.linkData.fields.location.stringValue,
        about: result.linkData.fields.about.stringValue,
        links: result.linkData.fields.links.arrayValue.values,
      };

      localStorage.setItem("so_i&r", JSON.stringify(tokens));

      login(tokens);

      dispatch(setUserInfo(linkInfo));

      navigate("/home/" + id);
    },
  });
};

export default useAuthRegister;
