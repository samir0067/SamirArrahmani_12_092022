import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import Logo from "assets/logo.svg";

const NavBar: FC = () => {
  return (
    <header className="header">
      <div className="header_container">
        <a href="/">
          <img className="logoNavBar" src={Logo} alt="logo" />
        </a>
        <ul>
          <li>
            <NavLink className={({ isActive }) => (isActive ? "active" : "")} to={`/dashboard`}>
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? "active" : "")} to={`/profil`}>
              Profil
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? "active" : "")} to={`/reglage`}>
              Réglage
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? "active" : "")} to={`/communaute`}>
              Communauté
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default NavBar;
