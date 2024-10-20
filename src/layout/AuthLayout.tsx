import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <main className="auth_layout">
      <Outlet />
    </main>
  );
};

export default AuthLayout;
