import { useState } from "react";

import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({ username: "", email: "" });

  const { username, email } = formState;

  const onInputChange = ({ target: { name, value } }) => {
    setFormState({ ...formState, [name]: value });
  };

  return (
    <div className="bg-white border rounded p-5 my-5">
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
    </div>
  );
};
