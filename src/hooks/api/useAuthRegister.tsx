import { useMutation } from "@tanstack/react-query";
import register from "../../service/auth/register";
import { IRegisterResponse } from "../../interfaces/services/auth/register";

const useAuthRegister = () => {
  return useMutation({
    mutationFn: register,
    onSuccess: (data: IRegisterResponse) => {
      console.log(data);
    },
  });
};

export default useAuthRegister;
