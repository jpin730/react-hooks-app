import { fireEvent, render, screen } from "@testing-library/react";

import { TodoItem } from "../../src/useReducer/TodoItem";

describe("TodoItem", () => {
  const todo = {
    id: 1,
    description: "Mocked description 1",
    done: false,
  };

  const onDeleteTodoMock = jest.fn();
  const onToggleTodoMock = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  test("should show a pending todo", () => {
    render(
      <TodoItem
        todo={todo}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    );

    const spanElement = screen.getByLabelText("span");
    const iElement = screen.getByLabelText("square-icon");

    expect(spanElement.className).not.toContain("text-decoration-line-through");
    expect(spanElement.className).not.toContain("text-body-tertiary");

    expect(iElement.className).toContain("bi-square");
    expect(iElement.className).not.toContain("bi-check-square");
  });

  test("should show a completed todo", () => {
    todo.done = true;

    render(
      <TodoItem
        todo={todo}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    );

    const spanElement = screen.getByLabelText("span");
    const iElement = screen.getByLabelText("square-icon");

    expect(spanElement.className).toContain("text-decoration-line-through");
    expect(spanElement.className).toContain("text-body-tertiary");

    expect(iElement.className).not.toContain("bi-square");
    expect(iElement.className).toContain("bi-check-square");
  });

  test("should call onToggleTodo on click span", () => {
    render(
      <TodoItem
        todo={todo}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    );

    const spanElement = screen.getByLabelText("span");

    fireEvent.click(spanElement);

    expect(onToggleTodoMock).toHaveBeenCalledTimes(1);
    expect(onToggleTodoMock).toHaveBeenCalledWith(todo);
  });

  test("should call onDeleteTodo on click remove button", () => {
    render(
      <TodoItem
        todo={todo}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    );

    const removeBtn = screen.getByRole("button");

    fireEvent.click(removeBtn);

    expect(onDeleteTodoMock).toHaveBeenCalledTimes(1);
    expect(onDeleteTodoMock).toHaveBeenCalledWith(todo);
  });
});
