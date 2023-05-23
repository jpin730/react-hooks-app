import { useContext } from "react";

import { UserContext } from "./";
import { useForm } from "../hooks";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const { setUser } = useContext(UserContext);

  const { username, onInputChange } = useForm({ username: "" });

  const navigate = useNavigate();

  const onLogin = () => {
    setUser(username);
    navigate("/");
  };

  return (
    <>
      <h3>Login Page</h3>
      <hr />

      <input
        type="text"
        className="form-control w-25 mb-3"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <button className="btn btn-primary" onClick={onLogin}>
        Login
      </button>
    </>
  );
};
