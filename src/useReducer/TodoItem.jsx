export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span
        className={`align-self-center ${
          todo.done ? "text-decoration-line-through text-body-tertiary" : ""
        }`}
        style={{ cursor: "pointer" }}
        onClick={() => onToggleTodo(todo)}
        aria-label="span"
      >
        <i
          className={`me-2 ${todo.done ? "bi-check-square" : "bi-square"}`}
          aria-label="square-icon"
        ></i>
        {todo.description}
      </span>
      <button className="btn btn-danger" onClick={() => onDeleteTodo(todo)}>
        Remove
      </button>
    </li>
  );
};
