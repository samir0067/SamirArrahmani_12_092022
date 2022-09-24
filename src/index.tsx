import React from "react"
import ReactDOM from "react-dom/client"
import Routing from "navigation/Routing"
import {BrowserRouter} from "react-router-dom"
import "normalize.css"
import "index.css"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routing/>
    </BrowserRouter>
  </React.StrictMode>
)
