export const SET_FILTER = "SET_FILTER";

export const filterTasks = (type) => ({
  type: SET_FILTER,
  payload: type,
});
