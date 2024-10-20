import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import useRefreshToken from "../hooks/api/useRefreshToken";
import { decryptToken } from "../utils/auth/cryptoID";

const HomeLayout = () => {
  const { mutate: refreshToken, isPending } = useRefreshToken();

  useEffect(() => {
    const refresh_token = decryptToken(
      JSON.parse(localStorage.getItem("so_i&r")!).so_r
    );

    refreshToken(refresh_token);

    const interval = setInterval(() => {
      refreshToken(refresh_token);
    }, 3600 * 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="home_layout">
      {isPending ? <div>Loading...</div> : <Outlet />}
    </main>
  );
};

export default HomeLayout;
