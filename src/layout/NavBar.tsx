import React, { FC, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "assets/logo.svg";
import Button from "components/Button";
import { UserContext } from "utils/context/userContext";

/**
 * Page navigation system, with removal of the global state when returning to the home page
 */
const NavBar: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

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
            className={location.pathname === `/user/${user?.data.id}` ? "active" : ""}
            onClick={() => navigate(`/user/${user?.data.id}`)}
          />
          <Button
            isLink
            title="Réglage"
            className={location.pathname === "/setting" ? "active" : ""}
            onClick={() => navigate("/setting")}
          />
          <Button
            isLink
            title="Communauté"
            className={location.pathname === "/community" ? "active" : ""}
            onClick={() => navigate("/community")}
          />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
