import React, { FC, useContext, useEffect, useState } from "react";
import { UserContext } from "utils/context/userContext";
import { useNavigate } from "react-router-dom";
import { CardFoodDetail } from "components/CardFoodDetail";
import energy from "assets/energy.svg";
import chicken from "assets/chicken.svg";
import apple from "assets/apple.svg";
import cheeseburger from "assets/cheeseburger.svg";
import Activity from "components/Activity";
import { SessionsActivity, SessionsAverage, SessionsPerformance } from "utils/types";
import Sessions from "components/Sessions";
import Performance from "components/Performance";
import Score from "components/Score";
import callApi from "services/callApi";

const Profile: FC = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const [activity, setActivity] = useState<SessionsActivity[]>();
  const [averageSessions, setAverageSessions] = useState<SessionsAverage[]>();
  const [performance, setPerformance] = useState<SessionsPerformance[]>();
  const [scoreToday, setScoreToday] = useState<number>();

  useEffect(() => {
    if (user === undefined) {
      navigate("/");
    } else {
      setScoreToday(user.data.todayScore ? user.data.todayScore : user.data.score);
      const fetchApiData = async () => {
        const userPerformance = await callApi.getUserPerformance(user.data.id);
        setPerformance(userPerformance?.data.data);
        const userAverageSession = await callApi.getUserAverageSession(user.data.id);
        setAverageSessions(userAverageSession?.data.sessions);
        const userActivityData = await callApi.getUserActivity(user.data.id);
        setActivity(userActivityData?.data.sessions);
      };
      fetchApiData();
    }
  }, [user]);

  const content = {
    title: `Bonjour `,
    subtitle: "Félicitation ! Vous avez explosé vos objectifs hier 👏",
    scoreTitle: "Score",
    scoreTexte: "de votre objectif",
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
        <div className="profile_activityContent">
          <Activity sessions={activity!} />
        </div>
        <div className="profile_sessions">
          <Sessions averageSessions={averageSessions!} />
        </div>
        <div className="profile_performance">
          <Performance performance={performance!} />
        </div>
        <div className="profile_score">
          <h3>{content.scoreTitle}</h3>
          <div className="profile_score_textContent">
            <p className="profile_score_textContent_title">{scoreToday && scoreToday * 100}%</p>
            <p className="profile_score_textContent_text">{content.scoreTexte}</p>
          </div>
          <Score scoreToday={scoreToday} />
        </div>
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
