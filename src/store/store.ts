import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    users: useReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
