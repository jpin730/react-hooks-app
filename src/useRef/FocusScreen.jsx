import { useRef } from "react";

export const FocusScreen = () => {
  const inputRef = useRef();

  const onClick = () => {
    inputRef.current.select();
  };

  return (
    <div className="bg-white border rounded p-5 my-5">
      <h2>Focus Screen</h2>
      <hr />

      <input
        ref={inputRef}
        type="text"
        placeholder="Username"
        className="form-control w-25 mb-3"
      />

      <button className="btn btn-primary" onClick={onClick}>
        Focus input
      </button>
    </div>
  );
};
