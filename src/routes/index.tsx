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
          element: <Navigate to="/dashboard/app" replace />,
          index: true,
        },
        {
          path: "app",
          element: <App />,
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
          path: "profiles",
          element: <Profiles />,
        },
        {
          path: "profile",
          element: <Profile />,
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

const App = lazy(() => import("../pages/App"));
const Ecommerce = lazy(() => import("../pages/Ecommerce"));
const Charts = lazy(() => import("../pages/Charts"));
const Profiles = lazy(() => import("../pages/Profiles"));
const Profile = lazy(() => import("../pages/Profile"));
