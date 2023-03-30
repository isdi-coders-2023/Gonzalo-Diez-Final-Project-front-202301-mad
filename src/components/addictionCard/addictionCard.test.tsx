/* eslint-disable testing-library/no-unnecessary-act */
/* eslint-disable testing-library/no-render-in-setup */
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter as Router } from "react-router-dom";
import { store } from "../../store/store";
import { act } from "react-dom/test-utils";
import { UseAddictions } from "../../hooks/addictions/use.addictions";
import { AddictionCard } from "./addictionCard";

jest.mock("../../hooks/addictions/use.addictions");

describe("Given the addiction Card component", () => {
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
            <AddictionCard
              addiction={{
                id: "",
                name: "test",
                img: "",
                description: "",
              }}
            ></AddictionCard>
          </Router>
        </Provider>
      );
    });
  });
  describe("When we render the component", () => {
    test("Then, things should be in the document", () => {
      const img = screen.getAllByRole("img");

      expect(img[0]).toBeInTheDocument();
    });
  });
});
