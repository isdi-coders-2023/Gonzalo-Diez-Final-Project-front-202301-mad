import { PayloadAction } from "@reduxjs/toolkit";
import { Condition } from "../models/conditions";
import { conditionsReducer } from "./conditions.slice";
import { ConditionsState } from "./conditions.slice";

const ConditionMock = {} as unknown as Condition[];

const mockInitialState: ConditionsState = {
  conditions: [],
};

describe("Given the Conditions slice reducer", () => {
  describe("When we use the load method", () => {
    test("Then, it should return the array of loaded conditions", () => {
      const loadMock: PayloadAction<Condition[]> = {
        type: "condition/load",
        payload: ConditionMock,
      };
      const result = conditionsReducer(mockInitialState, loadMock);
      expect(result.conditions).toEqual(ConditionMock);
    });
  });
});
