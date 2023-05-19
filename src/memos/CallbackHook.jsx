import { useCallback, useState } from "react";

import { IncrementButton } from "./IncrementButton";

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  const memorizedFn = useCallback((value = 1) => {
    setCounter((counter) => counter + value);
  }, []);

  return (
    <>
      <h2>Callback Hook: {counter}</h2>
      <hr />

      <IncrementButton increment={memorizedFn} />
    </>
  );
};
