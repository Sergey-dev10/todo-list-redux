export const ADD_TASK = "ADD_TASK";
export const COMPLETE_TASK = "COMPLETE_TASK";
export const REMOVE_TASK = "REMOVE_TASK";
export const EDIT_TASK = "EDIT_TASK";
export const UPDATE_TASKS = "UPDATE_TASKS";
export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});
export const completeTask = (id) => ({
  type: COMPLETE_TASK,
  payload: id,
});
export const removeTask = (id) => ({
  type: REMOVE_TASK,
  payload: id,
});

export const editTask = (id, title, isEdit) => ({
  type: EDIT_TASK,
  payload: { id, title, isEdit },
});

export const updateTasks = (tasks) => ({
  type: UPDATE_TASKS,
  payload: tasks,
});
