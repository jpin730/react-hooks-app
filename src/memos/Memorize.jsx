import { useState } from "react";
import { useCounter } from "../hooks";
import { Small } from "./Small";

export const Memorize = () => {
  const { counter, increment } = useCounter(10);
  const [switchValue, setSwitchValue] = useState(false);

  const onChangeSwitch = () => {
    setSwitchValue(!switchValue);
  };

  return (
    <>
      <h2>
        Counter: <Small value={counter} />
      </h2>
      <hr />

      <input
        type="checkbox"
        className="btn-check"
        id="checkbox"
        checked={switchValue}
        onChange={onChangeSwitch}
      />
      <label className="btn btn-outline-primary px-5 me-5" htmlFor="checkbox">
        {switchValue ? "On" : "Off"}
      </label>

      <button className="btn btn-primary px-5" onClick={increment}>
        +1
      </button>
    </>
  );
};
