import React from "react";
import ReactDOM from "react-dom/client";
import Routing from "navigation/Routing";
import { BrowserRouter } from "react-router-dom";
import "normalize.css";
import "index.css";
import { UserProvider } from "utils/context/UserProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <Routing />
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
