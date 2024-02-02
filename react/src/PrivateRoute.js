import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./Auth";

const PrivateRoute = () => {
  const authenticated = useAuth();
  if (!authenticated) { return <Navigate to="/login" />; }
  return <Outlet />;
};

export default PrivateRoute;