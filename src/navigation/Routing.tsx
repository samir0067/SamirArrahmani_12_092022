import React, { Fragment } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import NotFound from "pages/NotFound";
import Home from "pages/Home";
import Setting from "pages/Setting";
import Community from "pages/Community";
import Profile from "pages/Profile";
import NavBar from "layout/NavBar";
import AsideBar from "layout/AsideBar";

const Routing = () => {
  const location = useLocation();

  return (
    <main>
      <NavBar />
      <AsideBar />
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/profil" element={<Profile />} />
        <Route path="/reglage" element={<Setting />} />
        <Route path="/communaute" element={<Community />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
};

export default Routing;
