import { PayloadAction } from "@reduxjs/toolkit";
import { UserAddiction } from "../models/addictions";
import { User } from "../models/user";
import { userReducer, State } from "./users.slice";

const mockPass = "test";

const userMock = {
  id: "1",
  email: "ThisIsATest@test.com",
  password: mockPass,
};

const mockInitialState: State = {
  userLogged: {} as User,
  route: "",
  users: [],
  userAddictions: {} as User,
  userConditions: {} as User,
};

describe("Given the Users slice reducer", () => {
  describe("When we use the register method", () => {
    test("Then, it should return the users array with the new users as a state", () => {
      const registerMock: PayloadAction<User> = {
        type: "user/register",
        payload: userMock,
      };
      const result = userReducer(mockInitialState, registerMock);
      expect(result.users).toContain(userMock);
    });
  });
  describe("When we use the LogIn method", () => {
    test("Then, it should return the logged user in UserLogged", () => {
      const loginMock: PayloadAction<User> = {
        type: "user/login",
        payload: userMock,
      };
      const result = userReducer(mockInitialState, loginMock);
      expect(result.userLogged).toEqual(userMock);
    });
  });
  describe("When we use the path method", () => {
    test("Then, it should return the given string / path in the state route propertie", () => {
      const mockPath = "Profile";

      const pathMock: PayloadAction<string> = {
        type: "user/path",
        payload: mockPath,
      };
      const result = userReducer(mockInitialState, pathMock);
      expect(result.route).toEqual(mockPath);
    });
  });
  describe("When we use the addAddiction method", () => {
    test("Then, it should return the addedd addiction to the User", () => {
      const addAddictionmock: PayloadAction<User> = {
        type: "user/addAddiction",
        payload: userMock,
      };
      const result = userReducer(mockInitialState, addAddictionmock);
      expect(result.userLogged).toEqual(userMock);
    });
  });
});
