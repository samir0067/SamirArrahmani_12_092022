import React, { FC, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "utils/context/userContext";
import Button from "components/Button";
import callApi from "services/callApi";

const Home: FC = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  const handleUser = (uid: number) => {
    callApi.getUserMainData(uid).then((userData) => {
      setUser(userData);
    });
  };

  useEffect(() => {
    if (user?.data.id) {
      navigate(`/user/${user.data.id}`);
    }
  }, [user]);

  const content = {
    title: "SportSee",
    karlButton: "Karl Dovineau",
    ceciliaButton: "Cecilia Ratorez",
  };

  return (
    <section>
      <div className="home">
        <h1 className="home_title">{content.title}</h1>
        <div>
          <Button title={content.karlButton} onClick={() => handleUser(12)} />
          <Button title={content.ceciliaButton} onClick={() => handleUser(18)} />
        </div>
      </div>
    </section>
  );
};

export default Home;
