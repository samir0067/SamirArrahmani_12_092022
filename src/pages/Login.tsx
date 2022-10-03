import React, { createContext, FC, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import NavBar from "layout/NavBar";
import AsideBar from "layout/AsideBar";
import { IUserData } from "utils/interface";
import getUserData from "services/getUserData";

export const UserContext = createContext<IUserData | undefined>(undefined);

/**
 * Mock Data
 */
const getCecilia: string = process.env.PUBLIC_URL + "/mocks/ceciliaRatorezData.json";
const getKarl: string = process.env.PUBLIC_URL + "/mocks/karlDovineauData.json";

const Login: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState<IUserData | undefined>(undefined);

  const handleUser = (pathId: string) => {
    getUserData(pathId)
      .then((resultData) => {
        setUser(resultData);
      })
      .then(() => navigate("/dashboard"));
  };

  console.log("user ", user);

  return (
    <UserContext.Provider value={user}>
      <NavBar />
      <AsideBar />
      <main className="login">
        {location.pathname === "/" ? (
          <div className="login_childContainer">
            <button onClick={() => handleUser(getCecilia)}>Cecilia Ratorez</button>
            <button onClick={() => handleUser(getKarl)}>Karl Dovineau</button>
          </div>
        ) : (
          <Outlet />
        )}
      </main>
    </UserContext.Provider>
  );
};

export default Login;
