import { TodoAdd, TodoList } from "./";
import { useTodos } from "../hooks";

export const TodoApp = () => {
  const {
    todos,
    todosCount,
    pendingTodosCount,
    handleDeleteTodo,
    handleToggleTodo,
    handleNewTodo,
  } = useTodos();

  return (
    <div className="my-5">
      <h2>
        Todo App: {todosCount}, <small>pending: {pendingTodosCount}</small>
      </h2>
      <hr />

      <div className="row">
        <div className="col-8">
          <TodoList
            todos={todos}
            onDeleteTodo={handleDeleteTodo}
            onToggleTodo={handleToggleTodo}
          />
        </div>

        <div className="col-4">
          <h3>New Todo</h3>
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </div>
  );
};
