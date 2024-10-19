import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import Home from "../pages/home/page";
import Auth from "../pages/auth/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "/auth",
        element: <Auth />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export { router, RouterProvider };
