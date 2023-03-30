import { PayloadAction } from "@reduxjs/toolkit";
import { Addiction } from "../models/addictions";
import { addictionsReducer, AddictionsState } from "./addictions.slice";

const AddictionMock = {} as unknown as Addiction[];

const mockInitialState: AddictionsState = {
  addictions: [],
};

describe("Given the Addictions slice reducer", () => {
  describe("When we use the load method", () => {
    test("Then, it should return the array of loaded addictions", () => {
      const loadMock: PayloadAction<Addiction[]> = {
        type: "addiction/load",
        payload: AddictionMock,
      };
      const result = addictionsReducer(mockInitialState, loadMock);
      expect(result.addictions).toEqual(AddictionMock);
    });
  });
});
