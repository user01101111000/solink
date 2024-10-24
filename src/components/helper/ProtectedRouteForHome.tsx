import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/context/useAuth";
import React from "react";

const ProtectedRouteForHome = ({ children }: { children: React.ReactNode }) => {
  const { toks } = useAuth();

  if (toks) return <Navigate to={"/home/" + toks.so_id} />;

  return children;
};

export default ProtectedRouteForHome;
