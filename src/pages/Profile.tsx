import React, { FC, useContext, useEffect } from "react";
import { UserContext } from "utils/userContext";
import { useNavigate } from "react-router-dom";
import { CardFoodDetail } from "components/CardFoodDetail";
import energy from "assets/energy.svg";
import chicken from "assets/chicken.svg";
import apple from "assets/apple.svg";
import cheeseburger from "assets/cheeseburger.svg";

const Profile: FC = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  console.log("User context ==>", user?.id);

  useEffect(() => {
    if (user === undefined) {
      navigate("/");
    }
  }, [user]);

  const content = {
    title: `Bonjour `,
    subtitle: "Félicitation ! Vous avez explosé vos objectifs hier 👏",
  };

  return (
    <section>
      <div className="titleContent">
        <h1>
          {content.title}
          <span>{user?.userInfos.firstName}</span>
        </h1>
        <h2>{content.subtitle}</h2>
      </div>
      <div className="profile">
        <div className="profile_activityContent"></div>
        <div className="profile_sessions"></div>
        <div className="profile_performance"></div>
        <div className="profile_score"></div>
        <div className="profile_infoContent">
          <CardFoodDetail
            value={user?.keyData.calorieCount}
            unit="kCal"
            property="Calories"
            srcImg={energy}
            altImg="icon energy"
          />
          <CardFoodDetail
            value={user?.keyData.proteinCount}
            unit="g"
            property="Proteines"
            srcImg={chicken}
            altImg="icon chicken"
          />
          <CardFoodDetail
            value={user?.keyData.carbohydrateCount}
            unit="g"
            property="Glucides"
            srcImg={apple}
            altImg="icon apple"
          />
          <CardFoodDetail
            value={user?.keyData.lipidCount}
            unit="g"
            property="Lipides"
            srcImg={cheeseburger}
            altImg="icon cheeseburger"
          />
        </div>
      </div>
    </section>
  );
};
export default Profile;
