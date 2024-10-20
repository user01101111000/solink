import { createContext, useState, useContext } from "react";
import {
  IAuthContext,
  IAuthContextProvider,
  ITOK,
} from "../interfaces/context/auth_context";

const AuthContext = createContext<IAuthContext>({
  toks: null,
  login: () => {},
  logout: () => {},
});

const AuthContextProvider = ({ children }: IAuthContextProvider) => {
  const [toks, setToks] = useState<ITOK | null>(
    localStorage.getItem("so_i&r")
      ? JSON.parse(localStorage.getItem("so_i&r")!)
      : null
  );

  const login = (tokens: ITOK) => {
    setToks(tokens);
  };

  const logout = () => {
    localStorage.removeItem("so_i&r");
    setToks(null);
  };

  const data: IAuthContext = {
    toks,
    login,
    logout,
  };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthContextProvider, useContext };
