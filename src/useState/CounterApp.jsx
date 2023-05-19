import { useState } from "react";

export const CounterApp = () => {
  const [counters, setCounters] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
  });
  const { counter1 } = counters;

  return (
    <>
      <h2>Counter: {counter1}</h2>
      <hr />
      <button
        onClick={() =>
          setCounters(() => ({
            ...counters,
            counter1: counter1 + 1,
          }))
        }
        className="btn btn-primary px-5"
      >
        +1
      </button>
    </>
  );
};
