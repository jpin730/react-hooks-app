import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { UserContext } from "./";

export const HomePage = () => {
  const { user } = useContext(UserContext);

  const navigate = useNavigate();

  return (
    <>
      <h3>Home Page</h3>
      <hr />

      {user ? (
        <div className="alert alert-info">
          Welcome <span className="fw-bold">{user}</span>!
        </div>
      ) : (
        <button className="btn btn-primary" onClick={() => navigate("/login")}>
          Login
        </button>
      )}
    </>
  );
};
