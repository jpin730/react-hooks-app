export const TODO_ACTIONS = {
  addTodo: "[TODO] Add Todo",
  removeTodo: "[TODO] Remove Todo",
  toggleTodo: "[TODO] Toggle Todo",
};

export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case TODO_ACTIONS.addTodo:
      return [...state, action.payload];

    case TODO_ACTIONS.removeTodo:
      return state.filter((todo) => todo.id !== action.payload.id);

    case TODO_ACTIONS.toggleTodo:
      return state.map((todo) =>
        todo.id === action.payload.id ? { ...todo, done: !todo.done } : todo
      );

    default:
      return state;
  }
};
