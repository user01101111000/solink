import { useMutation, useQueryClient } from "@tanstack/react-query";
import updateData from "../../service/generator/updateData";

const useUpdateData = () => {
  return useMutation({
    mutationFn: updateData,
  });
};

export default useUpdateData;
