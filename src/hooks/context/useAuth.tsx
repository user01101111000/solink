import { AuthContext, useContext } from "../../context/AuthContext";

const useAuth = () => useContext(AuthContext);

export default useAuth;
