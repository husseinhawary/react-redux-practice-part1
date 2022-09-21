import { createSlice } from "@reduxjs/toolkit";

const initCounterState = { counter: 0, showCounter: true };

// Redux Toolkit
const counterSlice = createSlice({
  name: "Counter",
  initialState: initCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter += action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
