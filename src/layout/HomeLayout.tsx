import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <main className="home_layout">
      <Outlet />
    </main>
  );
};

export default HomeLayout;
