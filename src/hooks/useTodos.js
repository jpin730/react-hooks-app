import { useEffect, useReducer } from "react";

import { TODO_ACTIONS, todoReducer } from "../useReducer";

const init = () => JSON.parse(localStorage.getItem("todos")) || [];

export const useTodos = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = {
      type: TODO_ACTIONS.addTodo,
      payload: todo,
    };

    dispatch(action);
  };

  const handleDeleteTodo = (todo) => {
    dispatch({
      type: TODO_ACTIONS.removeTodo,
      payload: todo,
    });
  };

  const handleToggleTodo = (todo) => {
    dispatch({
      type: TODO_ACTIONS.toggleTodo,
      payload: todo,
    });
  };

  return {
    todos,
    todosCount: todos.length,
    pendingTodosCount: todos.filter((todo) => !todo.done).length,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
  };
};
