import React, { FC } from "react";
import { useLocation } from "react-router-dom";

const Community: FC = () => {
  const location = useLocation();
  console.log("user => ", location.state);

  const content = {
    title: "",
    message: "",
    link: "",
  };

  return (
    <>
      <main className="community">{content.title}</main>
    </>
  );
};

export default Community;
