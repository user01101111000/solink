import { useMutation } from "@tanstack/react-query";
import register from "../../service/auth/register";
import { IRegisterResponse } from "../../interfaces/services/auth/register";
import useAuth from "../context/useAuth";
import { useNavigate } from "react-router-dom";
import { encryptToken } from "../../utils/auth/cryptoID";
import { ITOK } from "../../interfaces/context/auth_context";

const useAuthRegister = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: register,
    onSuccess: (data: IRegisterResponse) => {
      const idToken = encryptToken(data.idToken);
      const refreshToken = encryptToken(data.refreshToken);

      const tokens: ITOK = {
        so_i: idToken,
        so_r: refreshToken,
      };

      localStorage.setItem("so_i&r", JSON.stringify(tokens));

      login(tokens);
      navigate("/home");
    },
  });
};

export default useAuthRegister;
