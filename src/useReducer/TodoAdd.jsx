import { useForm } from "../hooks";

export const TodoAdd = ({ onNewTodo }) => {
  const { description, onInputChange, onResetForm } = useForm({
    description: "",
  });

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (description.length === 0) return;

    const newTodo = {
      id: new Date().getTime(),
      done: false,
      description,
    };

    onNewTodo(newTodo);
    onResetForm();
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        className={`form-control mb-2`}
        placeholder="Description"
        name="description"
        value={description}
        onChange={onInputChange}
      />
      <button
        className="btn btn-primary px-5"
        type="submit"
        disabled={!description.length}
      >
        Add
      </button>
    </form>
  );
};
