import { useForm } from "../hooks";

export const FormWithCustomHook = () => {
  const { formState, onInputChange, onSubmit } = useForm({
    username: "",
    email: "",
    password: "",
  });

  const { username, email, password } = formState;

  return (
    <>
      <h2>Form with Custom Hook</h2>
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
      <input
        type="password"
        className="form-control w-25 mb-3"
        placeholder="Password"
        name="password"
        value={password}
        onChange={onInputChange}
      />

      <button className="btn btn-primary" onClick={onSubmit}>
        Submit
      </button>
    </>
  );
};
