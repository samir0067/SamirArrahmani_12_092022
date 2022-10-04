import React, { FC, useContext, useEffect } from "react";
import { UserContext } from "components/Context";
import { useNavigate } from "react-router-dom";

const Profile: FC = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (user === undefined) {
      navigate("/");
    }
  }, [user]);

  const content = {
    title: `Bonjour `,
    subtitle: "Félicitation ! Vous avez explosé vos objectifs hier 👏",
    message: "",
    link: "",
  };

  return (
    <section>
      <div className="profile">
        <h1>
          {content.title}
          <span className="">{user?.userInfos.firstName}</span>
        </h1>
        <h2>{content.subtitle}</h2>
      </div>
    </section>
  );
};
export default Profile;
