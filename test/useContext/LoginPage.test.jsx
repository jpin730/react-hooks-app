import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { LoginPage, UserContext } from "../../src/useContext";

// const mockUseNavigate = jest.fn();

// jest.mock("react-router-dom", () => ({
//   ...jest.requireActual("react-router-dom"),
//   useNavigate: () => mockUseNavigate,
// }));

describe("LoginPage", () => {
  test("should render component without username", () => {
    const mockSetUser = jest.fn();

    render(
      <MemoryRouter>
        <UserContext.Provider value={{ setUser: mockSetUser }}>
          <LoginPage />
        </UserContext.Provider>
      </MemoryRouter>
    );

    const inputElement = screen.getByRole("textbox");
    const loginBtn = screen.getByRole("button");

    expect(inputElement.value).toBe("");
    expect(loginBtn.disabled).toBe(true);
  });

  test("should call setUser on click login button", () => {
    const mockSetUser = jest.fn();

    render(
      <MemoryRouter>
        <UserContext.Provider value={{ setUser: mockSetUser }}>
          <LoginPage />
        </UserContext.Provider>
      </MemoryRouter>
    );

    const inputElement = screen.getByRole("textbox");
    const loginBtn = screen.getByRole("button");

    expect(inputElement.value).toBe("");
    expect(loginBtn.disabled).toBe(true);

    fireEvent.click(loginBtn);

    expect(mockSetUser).not.toBeCalled();

    const testInputValue = "MockedUsername";
    fireEvent.input(inputElement, { target: { value: testInputValue } });

    fireEvent.click(loginBtn);

    expect(mockSetUser).toBeCalledWith(testInputValue);
  });
});
