import { SET_FILTER } from "../actions/filterActions.js";

const initialState = {
  filterType: "All",
};

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER:
      return { ...state, filterType: action.payload };
    default:
      return state;
  }
};
