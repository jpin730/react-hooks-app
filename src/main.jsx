import React from "react";
import ReactDOM from "react-dom/client";

import { HooksApp } from "./HooksApp";
import { CounterApp } from "./useState/CounterApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="container">
      <HooksApp></HooksApp>
      <CounterApp></CounterApp>
    </div>
  </React.StrictMode>
);
