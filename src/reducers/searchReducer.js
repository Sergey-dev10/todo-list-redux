import { SEARCH } from "../actions/searchActions.js";

const initialType = {
  text: "",
};

export const searchReducer = (state = initialType, action) => {
  switch (action.type) {
    case SEARCH:
      return { ...state, text: action.payload };
    default:
      return state;
  }
};
