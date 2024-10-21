import { useQuery } from "@tanstack/react-query";
import getLinkInfo from "../../service/info/getLinkInfo";

const useGetLinkInfo = (id: string) => {
  return useQuery({
    queryKey: ["linkInfo", id],
    queryFn: () => getLinkInfo(id),
  });
};

export default useGetLinkInfo;
