/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable testing-library/no-unnecessary-act */
import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event/";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import { UseAddictions } from "./use.addictions";
import { AddictionsRepo } from "../../services/addictions/addictions.repo";

describe("Given the Use Addictions custom hook", () => {
  let repoMock: AddictionsRepo;

  beforeEach(async () => {
    repoMock = {
      url: "",
      load: jest.fn(),
    } as unknown as AddictionsRepo;

    const TestComponent = function () {
      const { loadAllAddictions } = UseAddictions(repoMock);

      return (
        <>
          return (
          <>
            <button onClick={() => loadAllAddictions()}>LogIn</button>
          </>
          );
        </>
      );
    };

    await act(async () =>
      render(
        <Provider store={store}>
          <TestComponent></TestComponent>
        </Provider>
      )
    );
  });
  describe("When the TestComponent is being rendered", () => {
    test("Then, the button should be rendered", async () => {
      const buttons = await screen.findAllByRole("button");
      expect(buttons[0]).toBeInTheDocument();
    });
  });
  describe("When the load button is called", () => {
    test("Then, the loadAllAddictions should be called", async () => {
      const buttons = await screen.findAllByRole("button");
      await act(async () => userEvent.click(buttons[0]));
      expect(repoMock.load).toHaveBeenCalled();
    });
  });
});
