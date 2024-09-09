import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import userSlice from "./userSlice";

export interface StoreState {
  counter: {
    count: number;
  };
  user: {
    name: string;
    age: number;
  };
}
export const store = configureStore({
  reducer: {
    counter: counterSlice,
    user: userSlice,
  },
});
