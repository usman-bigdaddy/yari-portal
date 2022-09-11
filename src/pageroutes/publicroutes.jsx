import React from "react";
import { Route, Routes } from "react-router-dom";
import ForgotPassword from "../pages/public/ForgotPassword";
import Login from "../pages/public/Login";
export default function PublicRoutes() {
  return (
    <Routes>
      <Route index element={<Login />} />
      {/* <Route exact path="/" element={<Login />} /> */}
      <Route path="/forgot-password" element={<ForgotPassword />} />
    </Routes>
  );
}
