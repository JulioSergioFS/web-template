import { lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";

export function Router() {
  return useRoutes([
    { path: "/", element: <Navigate to={"/dashboard"} replace /> },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/ecommerce",
      element: <Ecommerce />,
    },
  ]);
}

const Dashboard = lazy(() => import("../pages/Dashboard"));
const Login = lazy(() => import("../pages/Login"));
const Ecommerce = lazy(() => import("../pages/Ecommerce"));
