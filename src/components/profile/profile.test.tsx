/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable testing-library/no-unnecessary-act */
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { store } from "../../store/store";
import Profile from "./profile";

describe("Given the Profile component", () => {
  beforeEach(async () => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(
      <Provider store={store}>
        <Router>
          <Profile></Profile>
        </Router>
      </Provider>
    );
  });
  describe("When we render the component", () => {
    test("Then, profile heading should be on the document", () => {
      const heading = screen.getByRole("heading", { name: /profile/i });
      expect(heading).toBeInTheDocument();
    });

    test("Then, profile link should be on the document", () => {
      const link = screen.getByRole("link", { name: /profile/i });
      expect(link).toBeInTheDocument();
    });
  });
});
