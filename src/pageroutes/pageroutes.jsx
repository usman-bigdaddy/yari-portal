import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import AddSupporter from "../pages/private/AddSupporter";
import Dashboard from "../pages/private/Dashboard";
import Supporter from "../pages/private/Supporter";
import SupporterProfile from "../pages/private/SupporterProfile";
export default function PageRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Supporter />} />
        <Route path="/supporters" element={<Supporter />} />
        <Route path="/supporters/add" element={<AddSupporter />} />
        <Route path="/supporter/:id" element={<SupporterProfile />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </>
  );
}
