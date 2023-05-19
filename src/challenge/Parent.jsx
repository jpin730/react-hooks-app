import { useCallback, useState } from "react";

import { Child } from "./Child";

export const Parent = () => {
  const numbers = [1, 2, 3, 4, 5];
  const [value, setValue] = useState(0);

  const memorizedIncrementFn = useCallback((number) => {
    setValue((value) => value + number);
  }, []);

  return (
    <>
      <h2>Challenge: {value}</h2>
      <hr />

      {numbers.map((number) => (
        <Child key={number} number={number} increment={memorizedIncrementFn} />
      ))}
    </>
  );
};
