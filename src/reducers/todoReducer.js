import { actionTypes } from "../actions/index.js";

const { ADD_TASK, COMPLETE_TASK, REMOVE_TASK, EDIT_TASK, UPDATE_TASKS } =
  actionTypes;
const initialState = {
  tasks: [],
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };
    case COMPLETE_TASK:
      return {
        ...state,
        ...state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task,
        ),
      };
    case REMOVE_TASK:
      return {
        ...state,
        tasks: [...state.tasks.filter((task) => task.id !== action.payload)],
      };
    case EDIT_TASK:
      return {
        ...state,
        tasks: [
          ...state.tasks.map((task) =>
            task.id === action.payload.id
              ? { ...task, title: action.payload.title }
              : task,
          ),
        ],
      };
    case UPDATE_TASKS:
      return { ...state, tasks: action.payload };
    default:
      return state;
  }
};
