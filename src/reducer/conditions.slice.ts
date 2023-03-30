import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Condition } from "../models/conditions";

export type ConditionsState = {
  conditions: Condition[];
};

const initialState: ConditionsState = {
  conditions: [],
};

export const ConditionsSlice = createSlice({
  name: "condition",
  initialState,
  reducers: {
    loadConditions(state, action: PayloadAction<Condition[]>) {
      state.conditions = action.payload;
    },
  },
});

export const { loadConditions } = ConditionsSlice.actions;

export const conditionsReducer = ConditionsSlice.reducer;
