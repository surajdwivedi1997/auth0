import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = () => {
  const tokenData = localStorage.getItem("accessToken");

//   return tokenData ? <Outlet /> : <Navigate to="/" replace />;
};

export default PrivateRoute;
