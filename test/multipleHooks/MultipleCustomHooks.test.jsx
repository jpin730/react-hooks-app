import { fireEvent, render, screen } from "@testing-library/react";

import { MultipleCustomHooks } from "../../src/multipleHooks";
import { useCounter, useFetch } from "../../src/hooks";

jest.mock("../../src/hooks/useFetch");
jest.mock("../../src/hooks/useCounter");

describe("MultipleCustomHooks", () => {
  const mockedIncrement = jest.fn();
  useCounter.mockReturnValue({
    counter: 1,
    increment: mockedIncrement,
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("should render component by default", () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null,
    });

    render(<MultipleCustomHooks />);

    expect(screen.getByText("Loading..."));
    expect(screen.getByText("Multiple Custom Hooks"));

    const nextPostBtn = screen.getByRole("button", { name: "Next post" });
    expect(nextPostBtn.disabled).toBeTruthy();
  });

  test("should  show a post", () => {
    const body = "Mocked body";
    useFetch.mockReturnValue({
      data: { id: 1, body, userId: 1 },
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHooks />);

    expect(screen.getByText(body, { exact: false }));

    const nextPostBtn = screen.getByRole("button", { name: "Next post" });
    expect(nextPostBtn.disabled).toBeFalsy();
  });

  test("should fetch next post", () => {
    const body = "Mocked body";
    useFetch.mockReturnValue({
      data: { id: 1, body, userId: 1 },
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHooks />);

    const nextPostBtn = screen.getByRole("button", { name: "Next post" });

    fireEvent.click(nextPostBtn);

    expect(mockedIncrement).toBeCalledTimes(1);
  });
});
