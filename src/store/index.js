import { legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { rootReducer } from "../reducers/index.js";

export const store = createStore(rootReducer, composeWithDevTools());
