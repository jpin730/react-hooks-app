import { useState } from "react";

import { BasicHooks } from "./BasicHooks";
import { ReducerHook } from "./ReducerHook";

export const HooksApp = () => {
  const sections = {
    "Basic Hooks": <BasicHooks />,
    "Reducer Hook": <ReducerHook />,
  };
  const sectionKeys = Object.keys(sections);
  const [selectedSection, setSelectedSection] = useState(sectionKeys[0]);

  const onSelectSection = ({ target: { innerText } }) => {
    const sectionName = innerText.trim();
    setSelectedSection(sectionName);
  };

  return (
    <>
      <nav className="navbar sticky-top bg-primary">
        <div className="container">
          <span className="navbar-brand text-white">React Hook App</span>
          <ul className="navbar-nav flex-row column-gap-3">
            {sectionKeys.map((section) => (
              <li className="nav-item" key={section}>
                <button
                  className={`nav-link text-white ${
                    selectedSection === section ? "fw-bold" : ""
                  }`}
                  onClick={onSelectSection}
                >
                  {section}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div className="container">{sections[selectedSection]}</div>
    </>
  );
};
