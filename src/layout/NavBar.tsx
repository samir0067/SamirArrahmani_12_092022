import React, { FC, useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "assets/logo.svg";

const NavBar: FC = () => {
  const [profileId, setProfil] = useState();

  return (
    <header>
      <div className="container">
        <img className="logoNavBar" src={Logo} alt="logo" />
        <ul>
          <li>
            <NavLink className={({ isActive }) => (isActive ? "active" : "")} to={`/`}>
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? "active" : "")} to={`/profil/${profileId}`}>
              Profil
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? "active" : "")} to={`/reglage/${profileId}`}>
              Réglage
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? "active" : "")} to={`/communaute/${profileId}`}>
              Communauté
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default NavBar;
