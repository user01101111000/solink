import { useMutation } from "@tanstack/react-query";
import updateData from "../../service/generator/updateData";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../../lib/features/userSlice/userSlice";
import { ILinkInfo } from "../../interfaces/lib/features/userSlice/userSlice";

const useUpdateData = () => {
  const dispatch = useDispatch();
  return useMutation({
    mutationFn: updateData,

    onSuccess: ({ values, otherData, reworkedAvatar }) => {
      const newUserInfo: ILinkInfo = {
        id: otherData.id,
        email: otherData.email,
        username: otherData.username,
        idToken: JSON.parse(localStorage.getItem("so_i&r")!).so_i,
        fullName: values.fullName,
        avatar: reworkedAvatar as string,
        location: values.location,
        about: values.about,
        links: values.links,
      };

      dispatch(setUserInfo(newUserInfo));
    },
  });
};

export default useUpdateData;
