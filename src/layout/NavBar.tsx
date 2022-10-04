import React, { FC, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "assets/logo.svg";
import Button from "components/Button";
import { UserContext } from "components/Context";

/**
 * Page navigation system, with removal of the global state when returning to the home page
 * @constructor
 */
const NavBar: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const handleBackHome = () => {
    setUser(undefined);
    navigate("/");
  };

  return (
    <header className="header">
      <div className="header_container">
        <img className="logoNavBar" src={Logo} alt="logo" />
        <div className="header_container_links">
          <Button
            isLink
            title="Accueil"
            className={location.pathname === "/" ? "active" : ""}
            onClick={handleBackHome}
          />
          <Button
            isLink
            title="Profil"
            className={location.pathname === "/profil" ? "active" : ""}
            onClick={() => navigate("/profil")}
          />
          <Button
            isLink
            title="Réglage"
            className={location.pathname === "/reglage" ? "active" : ""}
            onClick={() => navigate("/reglage")}
          />
          <Button
            isLink
            title="Communauté"
            className={location.pathname === "/communaute" ? "active" : ""}
            onClick={() => navigate("/communaute")}
          />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
