import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import Home from "../pages/home/page";
import Main from "../pages/main/page";
import Auth from "../pages/auth/page";
import AuthLayout from "../layout/AuthLayout";
import ProtectedRouteForAuth from "../components/helper/ProtectedRouteForAuth";
import ProtectedRouteForHome from "../components/helper/ProtectedRouteForHome";
import Link from "../pages/link/page";

type CustomRouteObject = RouteObject & {
  auth?: boolean;
  home?: boolean;
};

const routes: CustomRouteObject[] = [
  {
    path: "/",
    element: <AuthLayout />,
    home: true,
    children: [
      {
        index: true,
        element: <Main />,
      },

      {
        path: "/auth",
        element: <Auth />,
      },
    ],
  },

  {
    path: "/home/:id",
    element: <HomeLayout />,
    auth: true,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/home/:id/:username",
        element: <Link />,
      },
    ],
  },

  {
    path: "*",
    element: <div>Not found</div>,
  },
];

const authedRoutes: CustomRouteObject[] = routes.map(
  (route: CustomRouteObject) => {
    if (route.auth)
      route.element = (
        <ProtectedRouteForAuth>{route.element}</ProtectedRouteForAuth>
      );

    if (route.home)
      route.element = (
        <ProtectedRouteForHome>{route.element}</ProtectedRouteForHome>
      );

    return route;
  }
);

const router = createBrowserRouter(authedRoutes);

export { router, RouterProvider };
