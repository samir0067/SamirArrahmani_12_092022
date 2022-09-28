import React, { FC, Fragment } from "react";
import { Link } from "react-router-dom";
import NavBar from "layout/NavBar";

const NotFound: FC = () => {
  const content = {
    title: "404",
    message: "Oups! La page que vous demandez n'existe pas.",
    link: "Retourner sur la page d’accueil",
  };

  return (
    <Fragment>
      <NavBar />
      <main className="notFound">
        <h1 className="notFound_title">{content.title}</h1>
        <p className="notFound_text">{content.message}</p>
        <Link className="notFound_link" to="/">
          {content.link}
        </Link>
      </main>
    </Fragment>
  );
};

export default NotFound;
