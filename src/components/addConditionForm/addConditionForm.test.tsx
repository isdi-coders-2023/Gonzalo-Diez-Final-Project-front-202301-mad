/* eslint-disable testing-library/no-unnecessary-act */
/* eslint-disable testing-library/no-render-in-setup */
import { render, act, fireEvent } from "@testing-library/react";
import { screen } from "@testing-library/react";
import AddConditionForm from "./addConditionForm";
import { UserRepo } from "../../services/user/user.repo";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import { BrowserRouter } from "react-router-dom";
import { UseUsers } from "../../hooks/user/use.users";
import userEvent from "@testing-library/user-event";
import { ConditionsState } from "../../reducer/conditions.slice";
import { UseConditions } from "../../hooks/conditions/use.conditions";

jest.mock("../../hooks/user/use.users");
jest.mock("../../hooks/conditions/use.conditions");

describe("Given addConditionForm component", () => {
  const usersMockRepo = {} as unknown as UserRepo;

  beforeEach(async () => {
    await act(async () => {
      const mockcondition: ConditionsState = {
        conditions: [
          {
            id: "1",
            name: "Condition 1",
            description: "description 1",
            img: "img",
          },
        ],
      };

      const mockConditionId = "1";
      (UseUsers as jest.Mock).mockReturnValue({
        addUserCondition: jest.fn(),
      });

      (UseConditions as jest.Mock).mockReturnValue({
        condition: mockcondition,
      });

      render(
        <Provider store={store}>
          <BrowserRouter>
            <AddConditionForm></AddConditionForm>
          </BrowserRouter>
        </Provider>
      );
    });
  });

  test("Then, the render of the component should have form fields", () => {
    const inputs = screen.getAllByRole("textbox");
    expect(inputs[0]).toBeInTheDocument();
    expect(inputs[1]).toBeInTheDocument();
  });
  test("Then, the render of the component should have the submit button", () => {
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  test("Then, the input fields should change their values when typing", async () => {
    const timeConsumingInput = screen.getByLabelText(
      /Time Consuming:/i
    ) as HTMLInputElement;

    await act(async () => {
      await userEvent.type(timeConsumingInput, "2022-01-01T00:00");
    });
    expect(timeConsumingInput.value).toBe("2022-01-01T00:00");

    const causeInput = screen.getByLabelText(/Cause:/i) as HTMLInputElement;
    await act(async () => {
      await userEvent.type(causeInput, "Test cause");
    });

    expect(causeInput.value).toContain("Test cause");
  });
  test("Then, if we submit the form, the addUserCondition hook should be called", async () => {
    store.dispatch({
      type: "users/login",
      payload: { userLogged: "testToken" },
    });
    const inputs = screen.getAllByRole("textbox");

    await act(async () => {
      await fireEvent.change(inputs[0], { value: "2022-01-01T00:00" });
      await fireEvent.change(inputs[1], { value: "Test cause" });
    });

    const sumbitButton = screen.getByRole("button");

    await act(async () => {
      await fireEvent.submit(sumbitButton);
    });

    expect(UseUsers(usersMockRepo).addUserCondition).toHaveBeenCalled();
  });
});
