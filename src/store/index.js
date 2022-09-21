//import { createStore } from "redux";

import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter";
import authReducer from "./auth";

// create the global store and pass to it the reducer function

const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

// subscribe the global store from react components, so I will export it

export default store;

// handling reducer function to change the state and return the current state or return the new state if it's changed
// const counterReducer = (state = initState, action) => {
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "increase") {

//     // In Redux, We should never change the existing state OR we shouldn't mutate the existing state
//     // state.counter ++;
//     // return state;
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "toggle") {
//     return {
//       showCounter: !state.showCounter,
//       counter: state.counter,
//     };
//   }

//   return state;
// };
