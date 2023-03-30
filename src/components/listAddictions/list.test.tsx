/* eslint-disable testing-library/no-unnecessary-act */
/* eslint-disable testing-library/no-render-in-setup */
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { store } from "../../store/store";
import ListAddictions from "./list";
import { act } from "react-dom/test-utils";
import { UseAddictions } from "../../hooks/addictions/use.addictions";

jest.mock("../addictionCard/addictionCard");
jest.mock("../../hooks/addictions/use.addictions");

describe("Given the List component", () => {
  beforeEach(async () => {
    await act(async () => {
      (UseAddictions as jest.Mock).mockReturnValue({
        loadAllAddictions: jest.fn(),
        addictions: {
          addictions: [
            { id: 1, name: "Addiction A" },
            { id: 2, name: "Addiction B" },
          ],
        },
      });

      render(
        <Provider store={store}>
          <Router>
            <ListAddictions></ListAddictions>
          </Router>
        </Provider>
      );
    });
  });
  describe("When we render the component", () => {
    test("Then, addictions text should be in the document", () => {
      const text = screen.getByText("Addictions");
      expect(text).toBeInTheDocument();
    });
  });
});
