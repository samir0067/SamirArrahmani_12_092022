import React, { FC, useContext, useEffect, useState } from "react";
import { UserContext } from "utils/context/userContext";
import { useNavigate } from "react-router-dom";
import { CardFoodDetail } from "components/CardFoodDetail";
import energy from "assets/energy.svg";
import chicken from "assets/chicken.svg";
import apple from "assets/apple.svg";
import cheeseburger from "assets/cheeseburger.svg";
import getUserActivity from "services/getUserActivity";
import getUserAverageSessions from "services/getUserAverageSessions";
// import getUserPerformance from "services/getUserPerformance";
import Activity from "components/Activity";
import { SessionsActivity, SessionsAverage } from "utils/types";
import Sessions from "components/Sessions";

const Profile: FC = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const [activity, setActivity] = useState<SessionsActivity[]>();
  const [averageSessions, setAverageSessions] = useState<SessionsAverage[]>();

  useEffect(() => {
    if (user === undefined) {
      navigate("/");
    } else {
      getUserActivity(user?.data.id).then((activityData) => {
        setActivity(activityData.data.sessions);
      });
      getUserAverageSessions(user?.data.id).then((averageSessionsData) => {
        setAverageSessions(averageSessionsData.data.sessions);
      });
      // getUserPerformance(user?.data.id).then((performanceData) => {
      //   console.log("performanceData ==>", performanceData);
      // });
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
        <div className="profile_activityContent">{activity && <Activity sessions={activity} />}</div>
        <div className="profile_sessions">{averageSessions && <Sessions averageSessions={averageSessions} />}</div>
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
