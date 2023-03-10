import { ReactNode, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
// pages
import Login from "../pages/auth/Login";

// ----------------------------------------------------------------------

export default function AuthGuard({ children }: { children?: ReactNode }) {
  const isAuthenticated = !!localStorage.getItem("email");
  const { pathname } = useLocation();
  const [requestedLocation, setRequestedLocation] = useState<string | null>(
    null
  );

  if (!isAuthenticated) {
    if (pathname !== requestedLocation) {
      setRequestedLocation(pathname);
    }
    return <Login />;
  }

  if (requestedLocation && pathname !== requestedLocation) {
    setRequestedLocation(null);
    return <Navigate to={requestedLocation} />;
  }

  return <>{children}</>;
}
