import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";

import { HooksApp } from "./HooksApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <HooksApp />
    </HashRouter>
  </React.StrictMode>
);
