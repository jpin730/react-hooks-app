import { useState } from "react";

import { Message } from "./";

export const SimpleForm = () => {
  const initialFormState = { username: "", email: "" };

  const [formState, setFormState] = useState(initialFormState);

  const { username, email } = formState;

  const onInputChange = ({ target: { name, value } }) => {
    setFormState({ ...formState, [name]: value });
  };

  const onSubmit = () => {
    console.log(formState);
    setFormState(initialFormState);
  };

  return (
    <>
      <h2>Simple Form</h2>
      <hr />

      <input
        type="text"
        className="form-control w-25 mb-3"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <input
        type="text"
        className="form-control w-25 mb-3"
        placeholder="Email"
        name="email"
        value={email}
        onChange={onInputChange}
      />

      {username === "user" && <Message />}

      <button className="btn btn-primary" onClick={onSubmit}>
        Submit
      </button>
    </>
  );
};
