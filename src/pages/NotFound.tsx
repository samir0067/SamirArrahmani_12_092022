import React, { FC } from "react";
import { Link } from "react-router-dom";

const NotFound: FC = () => {
  const content = {
    title: "404",
    message: "Oups! La page que vous demandez n'existe pas.",
    link: "Retourner sur la page d’accueil",
  };

  return (
    <section>
      <div className="notFound">
        <h1 className="notFound_title">{content.title}</h1>
        <p className="notFound_text">{content.message}</p>
        <Link className="notFound_link" to="/">
          {content.link}
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
