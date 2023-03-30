import { createHashRouter, Navigate } from "react-router-dom";
import AuthGuard from "../guards/AuthGuard";
import CreateAccount from "../pages/auth/CreateAccount";
import ForgotPassword from "../pages/auth/ForgotPassword";
import Login from "../pages/auth/Login";
import Charts from "../pages/Charts";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import NewUser from "../pages/NewUser";
import User from "../pages/User";
import Users from "../pages/Users";

export const router = createHashRouter([
  {
    path: "/",
    element: <Navigate to="/login" replace />,
  },
  {
    path: "/dashboard",
    element: (
      <AuthGuard>
        <Dashboard />
      </AuthGuard>
    ),
    children: [
      {
        element: <Navigate to="/dashboard/home" replace />,
        index: true,
      },
      {
        path: "home",
        element: <Home />,
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
        element: <NewUser />,
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
