import React, {FC, Fragment} from "react"
import {Link} from "react-router-dom"

const NotFound: FC = () => {
  const content = {
    title: "404",
    message: "Oups! La page que vous demandez n'existe pas.",
    link: "Retourner sur la page d’accueil"
  }

  return (
    <Fragment>
      <main>
        <h1>{content.title}</h1>
        <p>{content.message}</p>
        <Link className="linkRollback" to="/">
          {content.link}
        </Link>
      </main>
    </Fragment>
  )
}

export default NotFound
