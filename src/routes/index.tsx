import { lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import AuthGuard from "../guards/AuthGuard";

export function Router() {
  return useRoutes([
    { path: "/", element: <Navigate to="/login" replace /> },
    {
      path: "/dashboard",
      element: (
        <AuthGuard>
          <Dashboard />
        </AuthGuard>
      ),
      children: [
        {
          element: <Navigate to="/dashboard/ecommerce" replace />,
          index: true,
        },
        {
          path: "ecommerce",
          element: <Ecommerce />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/forgot-password",
      element: <ForgotPassword />,
    },
    {
      path: "/create-account",
      element: <CreateAccount />,
    },
  ]);
}

const Dashboard = lazy(() => import("../pages/Dashboard"));
const Login = lazy(() => import("../pages/auth/Login"));
const ForgotPassword = lazy(() => import("../pages/auth/ForgotPassword"));
const CreateAccount = lazy(() => import("../pages/auth/CreateAccount"));
const Ecommerce = lazy(() => import("../pages/Ecommerce"));
