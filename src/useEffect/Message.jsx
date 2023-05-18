import { useEffect } from "react";

export const Message = () => {
  useEffect(() => {
    console.log("Start listening mouse move.");
    const onMouseMove = () => {
      console.log("Listening mouse move..");
    };
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      console.log("Stop listening mouse move.");
    };
  }, []);

  return (
    <div className="alert alert-danger w-25 text-center" role="alert">
      User already exists
    </div>
  );
};
