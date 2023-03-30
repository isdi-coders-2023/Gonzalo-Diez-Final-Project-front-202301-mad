/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable testing-library/no-unnecessary-act */
import { User } from "../../models/user";
import { UserRepo } from "../../services/user/user.repo";
import { UseUsers } from "./use.users";
import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import { BrowserRouter as Router } from "react-router-dom";
import { UserAddiction } from "../../models/addictions";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockNavigate,
}));

describe("Given our users custom hook", () => {
  let payloadMock: User;
  let repoMock: UserRepo;
  const mockPass = "Test!";

  beforeEach(async () => {
    payloadMock = {
      email: "ThisIsATest@test.com",
      password: mockPass,
    } as unknown as User;

    const toAddMock = {
      addiction: "2",
      timeConsuming: new Date("10-09-2003"),
      cause: "stress",
    } as unknown as UserAddiction;

    repoMock = {
      create: jest.fn(),
      addAddiction: jest.fn(),
      getUser: jest.fn(),
    } as unknown as UserRepo;

    const TestComponent = function () {
      const { userLogin, userRegister, addUserAddiction, getUser } =
        UseUsers(repoMock);

      return (
        <>
          <button onClick={() => userLogin(payloadMock)}>LogIn</button>
          <button onClick={() => userRegister(payloadMock)}>Register</button>
          <button
            onClick={() =>
              addUserAddiction(
                toAddMock.addiction,
                toAddMock.timeConsuming,
                toAddMock.cause,
                "testToken"
              )
            }
          ></button>
          <button onClick={() => getUser("test")}>Register</button>
        </>
      );
    };

    await act(async () =>
      render(
        <Provider store={store}>
          <Router>
            <TestComponent></TestComponent>
          </Router>
        </Provider>
      )
    );
  });

  describe("When the TestComponent is being rendered", () => {
    test("Then, the buttons should be rendered", async () => {
      const buttons = await screen.findAllByRole("button");
      expect(buttons[0]).toBeInTheDocument();
    });
  });
  describe("When the login button is clicked", () => {
    test("Then, our login method should be called", async () => {
      const buttons = await screen.findAllByRole("button");
      await act(async () => userEvent.click(buttons[0]));
      expect(repoMock.create).toHaveBeenCalled();
    });
    // test("Then, it should navigate to /home", async () => {
    //   const buttons = await screen.findAllByRole("button");
    //   await act(async () => userEvent.click(buttons[0]));
    //   await Promise.resolve();
    //   expect(mockNavigate).toHaveBeenCalledWith("/home");
    // });
    describe("When the Register button is clicked", () => {
      test("Then, our register method should be called", async () => {
        const buttons = await screen.findAllByRole("button");
        await act(async () => userEvent.click(buttons[1]));
        expect(repoMock.create).toHaveBeenCalled();
      });
    });
    describe("When add addiction button is clicked", () => {
      test("Then, our addUserAddiction method should be called", async () => {
        const buttons = await screen.findAllByRole("button");
        await act(async () => userEvent.click(buttons[2]));
        expect(repoMock.addAddiction).toHaveBeenCalled();
      });
    });
    describe("Given the getUser method ", () => {
      test("then, the readUser method from the repo should be called", async () => {
        const elements = await screen.findAllByRole("button");
        await act(async () => userEvent.click(elements[3]));
        expect(repoMock.getUser).toHaveBeenCalled();
      });
    });
  });
});
