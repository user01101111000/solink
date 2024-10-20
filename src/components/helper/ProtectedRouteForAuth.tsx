import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/context/useAuth";
import React from "react";

const ProtectedRouteForAuth = ({ children }: { children: React.ReactNode }) => {
  const { toks } = useAuth();

  if (!toks) return <Navigate to={"/"} />;

  return children;
};

export default ProtectedRouteForAuth;
