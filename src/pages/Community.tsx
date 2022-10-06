import React, { FC, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "utils/context/userContext";

const Community: FC = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  console.log("User context community ==>", user);

  useEffect(() => {
    if (user === undefined) {
      navigate("/");
    }
  }, [user]);

  const content = {
    title: "Communauté",
  };

  return (
    <section>
      <div className="community">{content.title}</div>
    </section>
  );
};

export default Community;
