import { memo } from "react";

export const Child = memo(({ number, increment }) => {
  console.log(`Rendering Child ${number}...`);

  return (
    <button
      className="btn btn-primary px-3 me-3"
      onClick={() => increment(number)}
    >
      {number}
    </button>
  );
});
