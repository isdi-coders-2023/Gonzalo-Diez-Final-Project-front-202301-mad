import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "../app.router/app.router";
import App from "./app";

jest.mock("../register/register");
jest.mock("../app.router/app.router");

describe("Given the main App component", () => {
  describe("When we render it", () => {
    test("Then, it should render the Access component", () => {
      render(
        <BrowserRouter>
          <App></App>
        </BrowserRouter>
      );
      expect(AppRouter).toHaveBeenCalled();
    });
  });
});
