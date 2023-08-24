export const actionTypes = {
  ADD_TASK: "ADD_TASK",
  COMPLETE_TASK: "COMPLETE_TASK",
  REMOVE_TASK: "REMOVE_TASK",
  EDIT_TASK: "EDIT_TASK",
  UPDATE_TASKS: "UPDATE_TASKS",
};
export const addTask = (task) => ({
  type: actionTypes.ADD_TASK,
  payload: task,
});
export const completeTask = (id) => ({
  type: actionTypes.COMPLETE_TASK,
  payload: id,
});
export const removeTask = (id) => ({
  type: actionTypes.REMOVE_TASK,
  payload: id,
});

export const editTask = (id, title) => ({
  type: actionTypes.EDIT_TASK,
  payload: { id, title },
});

export const updateTasks = (tasks) => ({
  type: actionTypes.UPDATE_TASKS,
  payload: tasks,
});
