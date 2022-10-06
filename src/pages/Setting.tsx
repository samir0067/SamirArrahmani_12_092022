import React, { FC, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "utils/context/userContext";

const Setting: FC = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  console.log("User context setting ==>", user);

  useEffect(() => {
    if (user === undefined) {
      navigate("/");
    }
  }, [user]);

  const content = {
    title: "Réglage",
    message: "",
    link: "",
  };

  return (
    <section>
      <div className="setting"> {content.title}</div>
    </section>
  );
};

export default Setting;
