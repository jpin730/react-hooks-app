import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { MainApp } from "../../src/useContext";

describe("MainApp", () => {
  test("should render home page", () => {
    render(
      <MemoryRouter>
        <MainApp />
      </MemoryRouter>
    );

    const h3Element = screen.getByRole("heading", { level: 3 });

    expect(h3Element.innerHTML).toContain("Home Page");

    const anchors = screen.getAllByRole("link");
    const activeAnchor = anchors.find((a) => a.className.includes("active"));

    expect(activeAnchor.innerHTML).toContain("Home Page");
  });

  test("should render login page", () => {
    render(
      <MemoryRouter initialEntries={["/login"]}>
        <MainApp />
      </MemoryRouter>
    );

    const h3Element = screen.getByRole("heading", { level: 3 });

    expect(h3Element.innerHTML).toContain("Login Page");

    const anchors = screen.getAllByRole("link");
    const activeAnchor = anchors.find((a) => a.className.includes("active"));

    expect(activeAnchor.innerHTML).toContain("Login Page");
  });
});
