import { TODO_ACTIONS, todoReducer } from "../../src/useReducer";

describe("todoReducer", () => {
  const initialState = [
    {
      id: 1,
      description: "Mocked description 1",
      done: false,
    },
  ];

  test("should return initial state", () => {
    const newState = todoReducer(initialState, {});

    expect(newState).toBe(initialState);
  });

  test("should add a todo", () => {
    const action = {
      type: TODO_ACTIONS.addTodo,
      payload: {
        id: 2,
        description: "Mocked description 2",
        done: false,
      },
    };

    const newState = todoReducer(initialState, action);

    expect(newState.length).toBe(2);
    expect(newState).toContain(action.payload);
  });

  test("should remove a todo", () => {
    const action = {
      type: TODO_ACTIONS.removeTodo,
      payload: initialState[0],
    };

    const newState = todoReducer(initialState, action);

    expect(newState.length).toBe(0);
  });

  test("should toggle a todo", () => {
    const action = {
      type: TODO_ACTIONS.toggleTodo,
      payload: initialState[0],
    };

    const newState1 = todoReducer(initialState, action);

    expect(newState1[0].done).toBe(true);

    const newState2 = todoReducer(newState1, action);

    expect(newState2[0].done).toBe(false);
  });
});
