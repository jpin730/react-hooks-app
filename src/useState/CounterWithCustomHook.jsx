import { useCounter } from "./hooks/useCounter";

export const CounterWithCustomHook = () => {
  const { counter, increment, decrement, reset } = useCounter();

  return (
    <div className="bg-white border rounded p-5 my-5">
      <h2>Counter with Custom Hook: {counter}</h2>
      <hr />
      <button className="btn btn-danger px-5 me-5" onClick={decrement}>
        -1
      </button>
      <button className="btn btn-secondary px-5 me-5" onClick={reset}>
        Reset
      </button>
      <button className="btn btn-success px-5 me-5" onClick={increment}>
        +1
      </button>
    </div>
  );
};
