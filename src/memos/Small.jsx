import { memo } from "react";

export const Small = memo(({ value }) => {
  console.log("Rendering Small...");
  return <small>{value}</small>;
});
