export const SEARCH = "SEARCH";

export const searchTasks = (text) => ({
  type: SEARCH,
  payload: text,
});
