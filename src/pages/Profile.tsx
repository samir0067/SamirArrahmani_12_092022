import React, { FC } from "react";
import { useLocation } from "react-router-dom";

const Profile: FC = () => {
  const location = useLocation();
  console.log("user => ", location.state);

  const content = {
    title: "",
    message: "",
    link: "",
  };

  return (
    <>
      <main className="profile">{content.title}</main>
    </>
  );
};

export default Profile;
