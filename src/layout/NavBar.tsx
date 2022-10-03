import React, { FC, useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "assets/logo.svg";

const NavBar: FC = () => {
  const [userId, setUser] = useState();

  return (
    <header className="header">
      <div className="header_container">
        <img className="logoNavBar" src={Logo} alt="logo" />
        <ul>
          <li>
            <NavLink className={({ isActive }) => (isActive ? "active" : "")} to={`/`}>
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? "active" : "")} to={`/profil/${userId}`}>
              Profil
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? "active" : "")} to={`/reglage/${userId}`}>
              Réglage
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? "active" : "")} to={`/communaute/${userId}`}>
              Communauté
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default NavBar;
