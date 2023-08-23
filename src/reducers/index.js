import { combineReducers } from "redux";
import { todoReducer } from "./todoReducer.js";

export const rootReducer = combineReducers({
  todo: todoReducer,
});
