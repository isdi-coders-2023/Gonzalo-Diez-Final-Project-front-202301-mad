import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import { MemoryRouter as Router } from "react-router-dom";
import { Login } from "./login";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Given the login component", () => {
  beforeEach(async () => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(
      <Provider store={store}>
        <Router>
          <Login />
        </Router>
      </Provider>
    );
  });
  describe("When we render the component", () => {
    test("Then it should have the form n sumbit button", async () => {
      const button = screen.getByRole("button");
      await fireEvent.click(button);
    });
  });
});
