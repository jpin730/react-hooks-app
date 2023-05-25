import { render, screen } from "@testing-library/react";

import { TodoApp } from "../../src/useReducer";
import { useTodos } from "../../src/hooks";

jest.mock("../../src/hooks/useTodos");

describe("TodoApp", () => {
  test("should render component", () => {
    const mockUseTodos = {
      todos: [
        {
          id: 1,
          description: "Mocked description 1",
          done: false,
        },
        {
          id: 2,
          description: "Mocked description 2",
          done: true,
        },
      ],
      todosCount: 2,
      pendingTodosCount: 1,
      handleDeleteTodo: jest.fn(),
      handleToggleTodo: jest.fn(),
      handleNewTodo: jest.fn(),
    };
    useTodos.mockReturnValue(mockUseTodos);

    render(<TodoApp />);

    expect(screen.getByText(mockUseTodos.todos[0].description)).toBeTruthy();
    expect(screen.getByText(mockUseTodos.todos[1].description)).toBeTruthy();
    expect(screen.getByRole("textbox")).toBeTruthy();
  });
});
