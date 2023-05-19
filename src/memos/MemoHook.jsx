import { useMemo, useState } from "react";

import { useCounter } from "../hooks";
import { Small } from "./Small";

const heavyStuff = (iterations = 100) => {
  for (let i = 0; i < iterations; i++) {
    console.log("Processing...");
  }

  return `${iterations} iterations completed.`;
};

export const MemoHook = () => {
  const { counter, increment } = useCounter(300);
  const [switchValue, setSwitchValue] = useState(false);

  const onChangeSwitch = () => {
    setSwitchValue(!switchValue);
  };

  const memorizedCounter = useMemo(() => heavyStuff(counter), [counter]);

  return (
    <>
      <h2>
        Counter: <Small value={counter} />
      </h2>
      <hr />

      <h4 className="mb-3">{memorizedCounter}</h4>

      <input
        type="checkbox"
        className="btn-check"
        id="checkbox-memo-hook"
        checked={switchValue}
        onChange={onChangeSwitch}
      />
      <label
        className="btn btn-outline-primary px-5 me-5"
        htmlFor="checkbox-memo-hook"
      >
        {switchValue ? "On" : "Off"}
      </label>

      <button className="btn btn-primary px-5" onClick={increment}>
        +1
      </button>
    </>
  );
};
