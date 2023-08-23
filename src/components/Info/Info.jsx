import { useSelector } from "react-redux";
export const Info = () => {
  const tasks = useSelector((state) => state.todo.tasks);
  const incompleteTasks = tasks.filter(
    (task) => task.completed === false,
  ).length;
  return (
    <div>
      <span>{incompleteTasks} items left</span>
    </div>
  );
};
