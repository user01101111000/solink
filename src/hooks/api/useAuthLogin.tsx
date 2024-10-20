import { useMutation } from "@tanstack/react-query";
import login from "../../service/auth/login";
import { ILoginResponse } from "../../interfaces/services/auth/login";
import useAuth from "../context/useAuth";
import { useNavigate } from "react-router-dom";
import { encryptToken } from "../../utils/auth/cryptoID";
import { ITOK } from "../../interfaces/context/auth_context";

const useAuthLogin = () => {
  const { login: loginFn } = useAuth();

  const navigate = useNavigate();

  return useMutation({
    mutationFn: login,
    onSuccess: (data: ILoginResponse) => {
      const idToken = encryptToken(data.idToken);
      const refreshToken = encryptToken(data.refreshToken);

      const tokens: ITOK = {
        so_i: idToken,
        so_r: refreshToken,
      };

      localStorage.setItem("so_i&r", JSON.stringify(tokens));

      loginFn(tokens);
      navigate("/home");
    },
  });
};

export default useAuthLogin;
