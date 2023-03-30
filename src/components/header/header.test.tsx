/* eslint-disable testing-library/no-render-in-setup */
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../store/store";
import { Header } from "./header";

describe("Given the header component", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Header></Header>
        </BrowserRouter>
      </Provider>
    );
  });
  describe("When we render the Header component", () => {
    test("Then, it should have 2 images", () => {
      const img = screen.getAllByRole("img");
      expect(img[0]).toBeInTheDocument();
      expect(img[1]).toBeInTheDocument();
    });
  });
});
