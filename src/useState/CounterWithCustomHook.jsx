import { useCounter } from "../hooks";

export const CounterWithCustomHook = () => {
  const { counter, increment, decrement, reset } = useCounter();

  return (
    <>
      <h2>Counter with Custom Hook: {counter}</h2>
      <hr />

      <button className="btn btn-primary me-3" onClick={reset}>
        Reset
      </button>
      <button className="btn btn-primary px-3 me-3" onClick={decrement}>
        -1
      </button>
      <button className="btn btn-primary px-3" onClick={increment}>
        +1
      </button>
    </>
  );
};
