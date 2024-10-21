import LinkContainer from "../../containers/link/LinkContainer";
import { useParams } from "react-router-dom";
import useGetLinkInfo from "../../hooks/api/useGetLinkInfo";
import LoadingImageComponent from "../../components/ui/Loading/Loading";
import { ILinkData } from "../../interfaces/services/auth/register";

const Link = () => {
  const { id, username } = useParams();

  const { data, isLoading, isError } = useGetLinkInfo(id as string);

  if (isLoading) return <LoadingImageComponent size="1rem" />;

  if (isError) return <div>error</div>;

  if (data?.fields.username.stringValue != username)
    return <div>Invalid Link</div>;

  return <LinkContainer data={data as ILinkData} />;
};

export default Link;
