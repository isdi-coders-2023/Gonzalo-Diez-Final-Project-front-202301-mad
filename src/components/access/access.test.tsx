/* eslint-disable testing-library/no-render-in-setup */
// eslint-disable-next-line testing-library/no-render-in-setup

import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../store/store";
import Access from "./access";

jest.mock("../register/register");

describe("Given the access component", () => {
  const mockNavigate = jest.fn();

  beforeEach(() => {
    jest.mock("react-router-dom", () => ({
      ...jest.requireActual("react-router-dom"),
      useNavigate: () => mockNavigate,
    }));
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Access />
        </BrowserRouter>
      </Provider>
    );
  });

  describe("When we check the buttons", () => {
    test("then they should be in the document", () => {
      const button = screen.getAllByRole("button");

      fireEvent.click(button[0]);
      fireEvent.click(button[1]);
      expect(button[0]).toBeInTheDocument();
      expect(button[1]).toBeInTheDocument();
    });
    test("then the handleChange function should handle the case when boolean is equal to toChange", () => {
      const button1 = screen.getByText("I HAVE AN ACCOUNT");
      fireEvent.click(button1);
      fireEvent.click(button1);

      const button2 = screen.getByText("I'M NEW HERE");
      fireEvent.click(button2);
      fireEvent.click(button2);

      const login = screen.queryByText("Login");
      expect(login).not.toBeInTheDocument();

      const register = screen.queryByText("Register");
      expect(register).not.toBeInTheDocument();
    });
  });
});
