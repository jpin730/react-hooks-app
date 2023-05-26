import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { HomePage, UserContext } from "../../src/useContext";

const mockUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUseNavigate,
}));

describe("HomePage", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  test("should render component in logged out status", () => {
    render(
      <MemoryRouter>
        <UserContext.Provider value={{ user: "" }}>
          <HomePage />
        </UserContext.Provider>
      </MemoryRouter>
    );

    const loginBtn = screen.queryByRole("button");

    expect(loginBtn).toBeTruthy();
    expect(loginBtn.innerHTML).toContain("Login");
  });

  test("should render component in logged in status", () => {
    const user = "MockedUsername";
    render(
      <MemoryRouter>
        <UserContext.Provider value={{ user }}>
          <HomePage />
        </UserContext.Provider>
      </MemoryRouter>
    );

    const alertDivElement = screen.queryByRole("alert");

    expect(alertDivElement).toBeTruthy();
    expect(alertDivElement.innerHTML).toContain(user);
  });

  test("should call navigate on click login button", () => {
    render(
      <MemoryRouter>
        <UserContext.Provider value={{ user: "" }}>
          <HomePage />
        </UserContext.Provider>
      </MemoryRouter>
    );

    const loginBtn = screen.queryByRole("button");

    fireEvent.click(loginBtn);

    expect(mockUseNavigate).toBeCalledWith("/login");
  });
});
