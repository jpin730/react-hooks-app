import { memo } from "react";

export const IncrementButton = memo(({ increment }) => {
  console.log("Rendering Increment Button...");

  return (
    <>
      <button className="btn btn-primary me-3" onClick={() => increment(-1)}>
        Decrement
      </button>

      <button className="btn btn-primary" onClick={() => increment()}>
        Increment
      </button>
    </>
  );
});
