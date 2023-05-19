import { useLayoutEffect, useRef, useState } from "react";
import { useCounter } from "../hooks";

export const Layout = () => {
  const { counter, increment } = useCounter(0);

  const percentage = [25, 50, 75, 100][counter % 4];

  const boxRef = useRef();

  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    const { width, height } = boxRef.current.getBoundingClientRect();
    setBoxSize({ width, height });
  }, [counter]);

  return (
    <>
      <h2>Layout </h2>
      <hr />

      <div
        style={{ height: "200px", width: "200px" }}
        className="bg-light d-flex mb-3"
      >
        <div
          ref={boxRef}
          className={`d-flex border border-primary bg-primary-subtle m-auto w-${percentage} h-${percentage}`}
        >
          <span className="m-auto">{percentage}%</span>
        </div>
      </div>

      <code className="d-block mb-3">{JSON.stringify(boxSize)}</code>

      <button className="btn btn-primary" onClick={increment}>
        Change box size
      </button>
    </>
  );
};
