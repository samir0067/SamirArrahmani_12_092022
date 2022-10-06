import React, { FC, useContext, useEffect } from "react";
import { UserContext } from "utils/context/userContext";
import { useNavigate } from "react-router-dom";
import { CardFoodDetail } from "components/CardFoodDetail";
import energy from "assets/energy.svg";
import chicken from "assets/chicken.svg";
import apple from "assets/apple.svg";
import cheeseburger from "assets/cheeseburger.svg";
import getUserActivity from "services/getUserActivity";
import getUserAverageSessions from "services/getUserAverageSessions";
import getUserPerformance from "services/getUserPerformance";

const Profile: FC = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  console.log("User context ==>", user);

  useEffect(() => {
    if (user === undefined) {
      navigate("/");
    } else {
      getUserActivity(user?.data.id).then((activityData) => {
        console.log("activityData ==>", activityData);
      });
      getUserAverageSessions(user?.data.id).then((averageSessionsData) => {
        console.log("averageSessionsData ==>", averageSessionsData);
      });
      getUserPerformance(user?.data.id).then((performanceData) => {
        console.log("performanceData ==>", performanceData);
      });
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
          <span>{user?.data.userInfos.firstName}</span>
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
            value={user?.data.keyData.calorieCount}
            unit="kCal"
            property="Calories"
            srcImg={energy}
            altImg="icon energy"
          />
          <CardFoodDetail
            value={user?.data.keyData.proteinCount}
            unit="g"
            property="Proteines"
            srcImg={chicken}
            altImg="icon chicken"
            backgroundIcon="backgroundIconBlue"
          />
          <CardFoodDetail
            value={user?.data.keyData.carbohydrateCount}
            unit="g"
            property="Glucides"
            srcImg={apple}
            altImg="icon apple"
            backgroundIcon="backgroundIconYellow"
          />
          <CardFoodDetail
            value={user?.data.keyData.lipidCount}
            unit="g"
            property="Lipides"
            srcImg={cheeseburger}
            altImg="icon cheeseburger"
            backgroundIcon="backgroundIconPink"
          />
        </div>
      </div>
    </section>
  );
};
export default Profile;
