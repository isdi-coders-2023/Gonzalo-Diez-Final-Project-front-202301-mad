import { configureStore } from "@reduxjs/toolkit";
import { addictionsReducer } from "../reducer/addictions.slice";
import { conditionsReducer } from "../reducer/conditions.slice";
import { userReducer } from "../reducer/users.slice";

export const store = configureStore({
  reducer: {
    users: userReducer,
    addictions: addictionsReducer,
    conditions: conditionsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
