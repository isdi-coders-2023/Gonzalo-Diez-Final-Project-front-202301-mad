/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable testing-library/no-unnecessary-act */
import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event/";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import { UseConditions } from "./use.conditions";
import { ConditionsRepo } from "../../services/conditions/conditions.repo";

describe("Given the Use Conditions custom hook", () => {
  let repoMock: ConditionsRepo;

  beforeEach(async () => {
    repoMock = {
      url: "",
      load: jest.fn(),
    } as unknown as ConditionsRepo;

    const TestComponent = function () {
      const { loadAllConditions } = UseConditions(repoMock);

      return (
        <>
          return (
          <>
            <button onClick={() => loadAllConditions()}>LogIn</button>
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
    test("Then, the loadAllConditions should be called", async () => {
      const buttons = await screen.findAllByRole("button");
      await act(async () => userEvent.click(buttons[0]));
      expect(repoMock.load).toHaveBeenCalled();
    });
  });
});
