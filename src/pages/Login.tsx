import React, { FC, Fragment, useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import NavBar from "layout/NavBar";
import AsideBar from "layout/AsideBar";
import { UserMainData } from "utils/types";
import getUserMainData from "services/getUserMainData";

const Login: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [users, setUsers] = useState<UserMainData[]>([]);
  const [user, setUser] = useState<UserMainData | undefined>(undefined);

  useEffect(() => {
    getUserMainData().then((resultData) => {
      setUsers(resultData);
    });
  }, []);

  const handleUser = (userId: number) => {
    users.filter((userFilter) => {
      if (userFilter.id === userId) {
        setUser(userFilter);
      }
    });
  };

  useEffect(() => {
    if (user?.id) {
      navigate("/dashboard", { state: user });
    }
  }, [user]);

  return (
    <Fragment>
      <NavBar />
      <AsideBar />
      <main className="login">
        {location.pathname === "/" ? (
          <div className="login_childContainer">
            <button onClick={() => handleUser(12)}>Karl Dovineau</button>
            <button onClick={() => handleUser(18)}>Cecilia Ratorez</button>
          </div>
        ) : (
          <Outlet />
        )}
      </main>
    </Fragment>
  );
};

export default Login;
