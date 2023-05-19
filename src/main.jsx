import React from "react";
import ReactDOM from "react-dom/client";

import { HooksApp } from "./HooksApp";
import { CounterApp, CounterWithCustomHook } from "./useState";
import { SimpleForm, FormWithCustomHook } from "./useEffect";
import { MultipleCustomHooks } from "./multipleHooks/MultipleCustomHooks";
import { FocusScreen } from "./useRef/FocusScreen";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="container">
      <HooksApp />

      <CounterApp />

      <CounterWithCustomHook />

      <SimpleForm />

      <FormWithCustomHook />

      <MultipleCustomHooks />

      <FocusScreen />
    </div>
  </React.StrictMode>
);
