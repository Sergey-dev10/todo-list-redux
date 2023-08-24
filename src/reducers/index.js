import { combineReducers } from "redux";
import { todoReducer } from "./todoReducer.js";
import { filterReducer } from "./filterReducer.js";
import { searchReducer } from "./searchReducer.js";

export const rootReducer = combineReducers({
  todo: todoReducer,
  filter: filterReducer,
  search: searchReducer,
});
