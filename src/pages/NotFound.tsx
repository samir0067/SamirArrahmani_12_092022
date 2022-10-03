import React, { FC, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "pages/Login";

const NotFound: FC = () => {
  const currentUser = useContext(UserContext);

  console.log("currentUser => ", currentUser);

  const content = {
    title: "404",
    message: "Oups! La page que vous demandez n'existe pas.",
    link: "Retourner sur la page d’accueil",
  };

  return (
    <main className="notFound">
      <h1 className="notFound_title">{content.title}</h1>
      <p className="notFound_text">{content.message}</p>
      <Link className="notFound_link" to="/">
        {content.link}
      </Link>
    </main>
  );
};

export default NotFound;
