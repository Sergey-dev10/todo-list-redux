export const Info = ({ tasks }) => {
  const incompleteTasks = tasks.filter(
    (task) => task.completed === false,
  ).length;
  return (
    <div>
      <span>{incompleteTasks} items left</span>
    </div>
  );
};
