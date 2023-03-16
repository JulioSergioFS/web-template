import { lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import AuthGuard from "../guards/AuthGuard";

export function Router() {
  return useRoutes([
    {
      path: "/web-template",
      element: <Navigate to="/web-template/login" replace />,
    },
    {
      path: "/web-template/dashboard",
      element: (
        <AuthGuard>
          <Dashboard />
        </AuthGuard>
      ),
      children: [
        {
          element: <Navigate to="/web-template/dashboard/home" replace />,
          index: true,
        },
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "ecommerce",
          element: <Ecommerce />,
        },
        {
          path: "charts",
          element: <Charts />,
        },
        {
          path: "user",
          element: <User />,
        },
        {
          path: "users",
          element: <Users />,
        },
        {
          path: "users/new",
          element: <CreateNewUser />,
        },
      ],
    },
    {
      path: "/web-template/login",
      element: <Login />,
    },
    {
      path: "/web-template/forgot-password",
      element: <ForgotPassword />,
    },
    {
      path: "/web-template/create-account",
      element: <CreateAccount />,
    },
  ]);
}

const Dashboard = lazy(() => import("../pages/Dashboard"));
const Login = lazy(() => import("../pages/auth/Login"));
const ForgotPassword = lazy(() => import("../pages/auth/ForgotPassword"));
const CreateAccount = lazy(() => import("../pages/auth/CreateAccount"));

const Home = lazy(() => import("../pages/Home"));
const Ecommerce = lazy(() => import("../pages/Ecommerce"));
const Charts = lazy(() => import("../pages/Charts"));
const Users = lazy(() => import("../pages/Users"));
const User = lazy(() => import("../pages/User"));
const CreateNewUser = lazy(() => import("../pages/NewUser"));
