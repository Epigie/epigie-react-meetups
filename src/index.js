import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ReactMeetUps from "./ReactMeetUps";
import { FavoritesContextProvider } from "./store/favouritesContext";

ReactDOM.render(
  <React.StrictMode>
    <FavoritesContextProvider>
      <ReactMeetUps />
    </FavoritesContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
