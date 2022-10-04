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

  return (
    <section>
      <div className="home_childContainer">
        <Button title="Karl Dovineau" onClick={() => handleUser(12)} />
        <Button title="Cecilia Ratorez" onClick={() => handleUser(18)} />
      </div>
    </section>
  );
};

export default Home;
