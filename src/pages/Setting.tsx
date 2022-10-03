import React, { FC } from "react";
import { useLocation } from "react-router-dom";

const Setting: FC = () => {
  const location = useLocation();
  console.log("user => ", location.state);

  const content = {
    title: "",
    message: "",
    link: "",
  };

  return (
    <>
      <main className="setting">{content.title}</main>
    </>
  );
};

export default Setting;
