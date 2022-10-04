import React, { FC, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "components/Context";
import Button from "components/Button";

const Home: FC = () => {
  const navigate = useNavigate();
  const { user, users, setUser } = useContext(UserContext);

  console.log("user context", users);
  console.log("user context", user);

  const handleUser = (userId: number) => {
    users?.filter((userFilter) => {
      if (userFilter.id === userId) {
        setUser(userFilter);
      }
    });
  };

  useEffect(() => {
    if (user?.id) {
      navigate("/profil");
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
