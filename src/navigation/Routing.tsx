import React from "react";
import NotFound from "pages/NotFound";
import Login from "pages/Login";
import { Route, Routes, useLocation } from "react-router-dom";

const Routing = () => {
  const location = useLocation();

  return (
    <Routes key={location.pathname} location={location}>
      <Route path="/" element={<Login />}>
        <Route path="/dashboard" element={<NotFound />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routing;
