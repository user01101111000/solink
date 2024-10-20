import { useMutation } from "@tanstack/react-query";
import refreshToken from "../../service/auth/refreshToken";
import { IRefreshTokenResponse } from "../../interfaces/services/auth/refreshToken";
import { encryptToken } from "../../utils/auth/cryptoID";
import { ITOK } from "../../interfaces/context/auth_context";
import useAuth from "../context/useAuth";

const useRefreshToken = () => {
  const { login } = useAuth();

  return useMutation({
    mutationFn: refreshToken,

    onSuccess: (data: IRefreshTokenResponse) => {
      const idToken = encryptToken(data.id_token);
      const refreshToken = encryptToken(data.refresh_token);

      const tokens: ITOK = {
        so_i: idToken,
        so_r: refreshToken,
      };

      localStorage.setItem("so_i&r", JSON.stringify(tokens));

      login(tokens);
    },
  });
};

export default useRefreshToken;
