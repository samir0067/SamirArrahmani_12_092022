import React, { FC } from "react";
import { useLocation } from "react-router-dom";

const Dashboard: FC = () => {
  const location = useLocation();
  console.log("user => ", location.state);

  const content = {
    title: "",
    message: "",
    link: "",
  };

  return (
    <>
      <main className="dashboard">{content.title}</main>
    </>
  );
};

export default Dashboard;
