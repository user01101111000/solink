import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { AuthContextProvider } from "../../context/AuthContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const AllProviders: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <AuthContextProvider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </AuthContextProvider>
  );
};

export default AllProviders;
