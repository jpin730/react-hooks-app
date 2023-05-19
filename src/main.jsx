import React from "react";
import ReactDOM from "react-dom/client";

import { HooksApp } from "./HooksApp";
import { CounterApp, CounterWithCustomHook } from "./useState";
import { SimpleForm, FormWithCustomHook } from "./useEffect";
import { MultipleCustomHooks } from "./multipleHooks/MultipleCustomHooks";
import { FocusScreen } from "./useRef/FocusScreen";
import { Layout } from "./useLayoutEffect/Layout";
import { MemoHook, Memorize } from "./memos";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="container">
      <HooksApp />

      <div className="bg-white border rounded p-5 my-5">
        <CounterApp />
      </div>

      <div className="bg-white border rounded p-5 my-5">
        <CounterWithCustomHook />
      </div>

      <div className="bg-white border rounded p-5 my-5">
        <SimpleForm />
      </div>

      <div className="bg-white border rounded p-5 my-5">
        <FormWithCustomHook />
      </div>

      <div className="bg-white border rounded p-5 my-5">
        <MultipleCustomHooks />
      </div>

      <div className="bg-white border rounded p-5 my-5">
        <FocusScreen />
      </div>

      <div className="bg-white border rounded p-5 my-5">
        <Layout />
      </div>

      <div className="bg-white border rounded p-5 my-5">
        <Memorize />
      </div>

      <div className="bg-white border rounded p-5 my-5">
        <MemoHook />
      </div>
    </div>
  </React.StrictMode>
);
