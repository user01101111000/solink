import { useQuery } from "@tanstack/react-query";
import getLinkInfo from "../../service/info/getLinkInfo";

const useGetLinkInfo = () => {
  return useQuery({
    queryKey: ["linkInfos"],
    queryFn: getLinkInfo,
  });
};

export default useGetLinkInfo;
