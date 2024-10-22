import LinkContainer from "../../containers/link/LinkContainer";
import { useNavigate, useParams } from "react-router-dom";
import useGetLinkInfo from "../../hooks/api/useGetLinkInfo";
import LoadingImageComponent from "../../components/ui/Loading/Loading";
import { ILinkData } from "../../interfaces/services/auth/register";

const Link = () => {
  const { username } = useParams();
  const navigate = useNavigate();
  const { data, isLoading, isError } = useGetLinkInfo();

  if (isLoading)
    return (
      <div className="link_container_wrapper">
        <LoadingImageComponent size="1rem" />
      </div>
    );

  if (isError)
    return (
      <div className="link_container_wrapper">
        <h1 className="link_container_error">Link box not found !!!</h1>
        <button onClick={() => navigate("/")}>Go Back</button>
      </div>
    );

  const uniqueData = data.find(
    (x) => x.fields.username.stringValue == username?.split("@")[1]
  );

  if (!uniqueData || !uniqueData?.fields?.generated?.stringValue)
    return (
      <div className="link_container_wrapper">
        <h1 className="link_container_error">Link box not found !!!</h1>
        <button onClick={() => navigate("/")}>Go Back</button>
      </div>
    );

  return <LinkContainer data={uniqueData as ILinkData} />;
};

export default Link;
