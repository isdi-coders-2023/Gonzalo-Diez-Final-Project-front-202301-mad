import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../models/user";

export type State = {
  userLogged: any;
  route: string;
  users: User[];
  userAddictions: User;
  userConditions: User;
};

export const initialState: State = {
  userLogged: {},
  route: "",
  users: [],
  userAddictions: {} as User,
  userConditions: {} as User,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    register(state, action: PayloadAction<User>) {
      state.users = [...state.users, action.payload];
    },
    login(state, action: PayloadAction<User>) {
      state.userLogged = action.payload;
    },
    path(state, action: PayloadAction<string>) {
      state.route = action.payload;
    },
    addAddiction: (state, action: PayloadAction<User>) => {
      state.userAddictions = action.payload;
    },
    loadUser(state, action: PayloadAction<User>) {
      state.userAddictions = action.payload;
      state.userConditions = action.payload;
    },
    addCondition: (state, action: PayloadAction<User>) => {
      state.userConditions = action.payload;
    },
  },
});

export const { register, login, path, addAddiction, loadUser, addCondition } =
  userSlice.actions;

export const userReducer = userSlice.reducer;
