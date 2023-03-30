import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Addiction } from "../models/addictions";

export type AddictionsState = {
  addictions: Addiction[];
};

const initialState: AddictionsState = {
  addictions: [],
};

export const addictionsSlice = createSlice({
  name: "addiction",
  initialState,
  reducers: {
    load(state, action: PayloadAction<Addiction[]>) {
      state.addictions = action.payload;
    },
  },
});

export const { load } = addictionsSlice.actions;

export const addictionsReducer = addictionsSlice.reducer;
