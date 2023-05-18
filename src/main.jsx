import React from "react";
import ReactDOM from "react-dom/client";

import { HooksApp } from "./HooksApp";
import { CounterApp } from "./useState/CounterApp";
import { CounterWithCustomHook } from "./useState/CounterWithCustomHook";
import { SimpleForm } from "./useEffect/SimpleForm";
import { FormWithCustomHook } from "./useEffect/FormWithCustomHook";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="container">
      <HooksApp />

      <CounterApp />

      <CounterWithCustomHook />

      <SimpleForm />

      <FormWithCustomHook />
    </div>
  </React.StrictMode>
);
