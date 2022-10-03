import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import NotFound from "pages/NotFound";
import Login from "pages/Login";
import Dashboard from "pages/Dashboard";
import Setting from "pages/Setting";
import Community from "pages/Community";
import Profile from "pages/Profile";

const Routing = () => {
  const location = useLocation();

  return (
    <Routes key={location.pathname} location={location}>
      <Route path="/" element={<Login />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profil" element={<Profile />} />
        <Route path="/reglage" element={<Setting />} />
        <Route path="/communaute" element={<Community />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routing;
