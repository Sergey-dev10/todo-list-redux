import { TOGGLE } from "../actions/toggleButtonsActions.js";

const initialState = {
  action: "add",
};

export const toggleButtonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE:
      return { ...state, action: action.payload };
    default:
      return state;
  }
};
