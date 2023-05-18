import React from "react";
import ReactDOM from "react-dom/client";

import { HooksApp } from "./HooksApp";
import { CounterApp } from "./useState/CounterApp";
import { CounterWithCustomHook } from "./useState/CounterWithCustomHook";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="container">
      <HooksApp></HooksApp>

      <CounterApp></CounterApp>

      <CounterWithCustomHook></CounterWithCustomHook>
    </div>
  </React.StrictMode>
);
