import { screen, fireEvent, render, act } from "@testing-library/react";
import { Provider } from "react-redux";
import { UseUsers } from "../../hooks/user/use.users";
import { store } from "../../store/store";
import { MemoryRouter as Router } from "react-router-dom";

import { Register } from "./register";

jest.mock("../../hooks/user/use.users");

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Given the register function", () => {
  beforeEach(async () => {
    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      (UseUsers as jest.Mock).mockReturnValue({
        userRegister: jest.fn(),
      });
      // eslint-disable-next-line testing-library/no-render-in-setup
      render(
        <Provider store={store}>
          <Router>
            <Register />
          </Router>
        </Provider>
      );
    });
  });

  describe("When we render the register component", () => {
    test("Then, the form should be on screen", async () => {
      const button = screen.getByRole("button");
      await fireEvent.click(button);
    });
  });
});
