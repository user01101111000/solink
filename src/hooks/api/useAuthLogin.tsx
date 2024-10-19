import { useMutation } from "@tanstack/react-query";
import login from "../../service/auth/login";
import { ILoginResponse } from "../../interfaces/services/auth/login";

const useAuthLogin = () => {
  return useMutation({
    mutationFn: login,
    onSuccess: (data: ILoginResponse) => {
      console.log(data);
    },
  });
};

export default useAuthLogin;
